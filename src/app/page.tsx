"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"

type DiceProps = {
  n: number
  data: { name: string; value: number }[]
}

const Dice: React.FC<DiceProps> = ({ n, data }) => {
  console.log(n, data)
  return (
    <div className="dice-box border m-4 p-4">
      <h1 className="w-full text-center">执行次数：{n}</h1>
      <div className="w-[400px] h-[400px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function Home() {
  const [list, setList] = useState<
    { n: number; data: { name: string; value: number }[] }[]
  >([])
  const [n, setN] = useState(2)

  function btn() {
    if (n < 1) {
      alert("请输入大于0的数字")
      return
    }
    const list2: number[] = []
    for (let i = 0; i < n; i++) {
      list2.push(random() + random())
    }
    const data = {
      n,
      data: [
        { name: "2", value: findCount(list2, 2) },
        { name: "3", value: findCount(list2, 3) },
        { name: "4", value: findCount(list2, 4) },
        { name: "5", value: findCount(list2, 5) },
        { name: "6", value: findCount(list2, 6) },
        { name: "7", value: findCount(list2, 7) },
        { name: "8", value: findCount(list2, 8) },
        { name: "9", value: findCount(list2, 9) },
        { name: "10", value: findCount(list2, 10) },
        { name: "11", value: findCount(list2, 11) },
        { name: "12", value: findCount(list2, 12) },
      ],
    }
    const arr = [...list, data]
    console.log(arr)
    setList(arr)
  }
  // 计算每个数字出现的次数
  function findCount(array: number[], target: number) {
    return array.filter((el) => el === target).length || 0
  }
  // 随机生成1-6的整数
  function random() {
    return Math.floor(Math.random() * 6 + 1)
  }
  return (
    <div className="p-4">
      <div className="number-form">
        <div className="flex align-middle ">
          <input
            className="h-[36] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md  focus:ring-1  brfore:content-['*'] brfore:ml-0.5 brfore:text-red-500"
            type="number"
            placeholder="请输入要执行的次数"
            value={n}
            onChange={(e) => {
              setN(e.target.value as any)
            }}
          />
          <button
            onClick={btn}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            确定
          </button>

          <button
            onClick={() => {
              setList([])
            }}
            className="ml-4 bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            清空
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {list.map((el: any, index: number) => {
          return (
            <div key={index} className="w-[490px] h-[440px] box-border mb-20">
              <Dice n={el.n} data={el.data} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
