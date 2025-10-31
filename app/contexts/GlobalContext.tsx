"use client";
import react, { useEffect } from "react";
import { createCustomContext } from "../helpers/CreateCustomContext";
export type DiveType = "dive-deeper" | "diving-deeper";
export type SearchType = "categories" | "website" | "channel" | "keywords";
export interface INewsItem {}
export type ContentType = "video" | "image" | "article";
interface IGlobalState {
   searchValue: string;
   mainKeywordId: string;
   selectedSubtypeId: string;
   selectedContentType: ContentType;
}

// Helper function to safely get localStorage value

const initialState: IGlobalState = {
   searchValue: "",
   mainKeywordId: "1",
   selectedSubtypeId: "1",
   selectedContentType: "video",
};

function setState(
   state: IGlobalState,
   newState: Partial<IGlobalState>
): IGlobalState {
   return { ...state, ...newState };
}

const functions = {
   setState,
};

const { Context, Provider, useContextHook } = createCustomContext<
   IGlobalState,
   typeof functions
>({
   initialState,
   functions,
   customHook: (state) => {},
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
