"use client";
import React, { useEffect, useRef } from 'react'
export const Depart = () => {
    let dataArr = [
        {
            id: 1,
            name: '总经理办公室',
            code: 'CEO office'
        }, {
            id: 2,
            name: '研发部',
            code: 'development'
        }, {
            id: 3,
            name: '产品中心',
            code: 'product'
        }
    ]
    const [departments, setDepart]: any = React.useState([])
    useEffect(() => {
        setDepart(dataArr)
    }, [])

    const tableView = (
        <div className="table w-full m-4 text-sm border">
            <div className="head flex text-center bg-blue-500 h-[36px] items-center">
                <div className="flex-1">ID</div>
                <div className="flex-1">名称</div>
                <div className="flex-1">code</div>
            </div>
            <div className="cont">
                {departments.map((item: any) => {
                    return (
                        <div className="flex text-center h-[36px] items-center hover:bg-gray-100" key={item.id}>
                            <div className="flex-1">{item.id}</div>
                            <div className="flex-1">{item.name}</div>
                            <div className="flex-1">{item.code}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    return (
        <div className="flex w-full h-full">
            {tableView}
        </div>
    );
};
