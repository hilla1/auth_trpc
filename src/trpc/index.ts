import { publicProcedure, router } from './trpc';

export const appRouter = router({
test:publicProcedure.query(()=>{
    return 'Hello world! from Server Page'
})
})
export type AppRouter = typeof appRouter;