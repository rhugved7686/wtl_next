import { NextRequest, NextResponse } from "next/server";

export function GET (request:NextRequest){
    const url = request.nextUrl;
    const name = url.searchParams.get('name')
    const age = url.searchParams.get('age')

    if (age=="26") {
        return new NextResponse (`Hello ${name}`)
    }

    return NextResponse.json({url,name,age});
}

export function POST (request:NextRequest){
    return new NextResponse('post Api')
}