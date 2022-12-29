import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootStateI, DispatchI } from "./store";

export const useDispatchHOC = () => useDispatch<DispatchI>();
export const useSelectorHOC: TypedUseSelectorHook<RootStateI> = useSelector;
