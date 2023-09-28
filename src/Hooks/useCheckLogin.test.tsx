import { renderHook, act} from "@testing-library/react";
import useCheckLogin from "./UseCheckLogin";
import result from "antd/es/result";

describe('Hooks useCheckLogin test', () => {
    test('test increment fuction' () =>{
        const { result} = renderHook(()=> useCheckLogin()),
        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1)
    })
})