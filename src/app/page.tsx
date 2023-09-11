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
  list: { name: string; value: number }[]
}

const Dice: React.FC<DiceProps> = ({ n, list }) => {
  console.log(n, list)
  return (
    <div className="dice-box">
      <h1>执行次数：{n}</h1>
      <div className="w-[400px] h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={list}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function Home() {
  const [list, setList] = useState([])
  const [n, setN] = useState(0)
  function btn() {
    if (n < 1) {
      alert("请输入大于0的数字")
      return
    }
    console.log(n)
  }
  return (
    <div className="p-4">
      <div className="number-form">
        <div className="flex align-middle ">
          <input
            className="h-[36] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md  focus:ring-1  brfore:content-['*'] brfore:ml-0.5 brfore:text-red-500"
            type="number"
            min={1}
            placeholder="请输入要执行的次数"
            value={n}
            onChange={(e) => {
              setN(+e.target.value)
            }}
          />
          <button
            onClick={btn}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            确定开始执行
          </button>
        </div>
      </div>
      <div className="w-[400px] h-[400px]">
        <Dice
          n={1}
          list={[
            {
              name: "1",
              value: 1,
            },
            {
              name: "2",
              value: 2,
            },
          ]}
        />
      </div>
    </div>
  )
}
