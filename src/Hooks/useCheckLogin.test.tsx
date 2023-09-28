import { renderHook, act} from "@testing-library/react";
import useCheckLogin from "./UseCheckLogin";
import { Result } from "antd";

describe('Hooks useCheckLogin test', () => {
    test('test increment fuction' () =>{
        const { result} = renderHook(()=> useCheckLogin()),
        act(() => {
            result.current.increment();
        });

        expect(Result.current.count).toBe(1)
    })
})