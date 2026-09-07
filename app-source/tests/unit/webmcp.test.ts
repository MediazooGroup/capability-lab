/* oxlint-disable typescript/no-explicit-any -- A deliberately minimal browser API mock. */
import {it,expect} from 'vitest';
import {registerRecipeTool} from '../../lib/webmcp';
import {DEFAULT_WORKBOOK} from '../../lib/model';
it('exposes the same current recipe, rejects unexpected arguments and cleans up',()=>{let registered:any,signal:any;const w={...DEFAULT_WORKBOOK};const dispose=registerRecipeTool({registerTool(t,o){registered=t;signal=o.signal}},()=>w);expect(registered.name).toBe('read_skill_recipe');expect(registered.annotations.readOnlyHint).toBe(true);w.audience='Safety coaches';expect(registered.execute({}).markdown).toContain('Safety coaches');expect(()=>registered.execute({publish:true})).toThrow('empty object');expect(()=>registered.execute(null)).toThrow();w.sources='';expect(()=>registered.execute({})).toThrow('sources');dispose();expect(signal.aborted).toBe(true)});
it('works in browsers without WebMCP',()=>expect(()=>registerRecipeTool(undefined,()=>DEFAULT_WORKBOOK)()).not.toThrow());
