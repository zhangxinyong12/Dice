"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const [a] = useState<number>(1)
  const domRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.1, // 根据需要调整此值
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])

  function handleIntersection(entries) {
    if (entries[0].isIntersecting) {
      console.log("intersecting")
      console.log("元素可见")
    }
    console.log(entries)
  }

  return (
    <main className="p-4">
      <div className="sticky top-0 bg-black">头部吸顶</div>
      <div className="first:ml-4 last:ml-40">
        <button className="bg-sky-500 hover:bg-sky-700">save changes</button>
        <button
          className="bg-violet-500 ml-2 py-10 px-14
        active:bg-violet-700
        focus:bg-violet-200
      hover:bg-violet-600"
        >
          save changes
        </button>
        <span
          className="block before:content-['*']
        before:mr-1
        before:font-sans
        before:text-red-500"
        >
          block
        </span>
        <ul
          role={"list"}
          className="marker:text-sky-500 list-disc text-slate-500"
        >
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <div className="w-96">
          <p className="text-blue-600 selection:bg-fuchsia-500 selection:text-red-400">
            于是我开始下水。我不会骗你们男孩，我很害怕。但我继续前进，当我走过破碎机时，一种奇怪的平静笼罩着我。我不知道这是上帝的干预还是所有生物的亲属关系，但我告诉你，杰瑞，那一刻，我是一名海洋生物学家。
          </p>
        </div>
      </div>
      <div className="w-60 first-line  first-letter:text-7xl first-letter:text-gray-400">
        well, let me tell you something, funny boy. Y'know that little stamp,
        the one that says "New York Public Library"? Well that may not mean
        anything to you, but that means a lot to me. One whole hell of a lot.
      </div>
      <div className="px-[10px] py-[16px] border-2  text-center  w-[140px] text-[24px] bg-gray-500 text-[#33ff00]">
        140px
      </div>
      <div>
        <div className="container mx-auto px-4 bg-red-300 text-center">
          水平居中
        </div>
      </div>
      <div className="columns-4 gap-20">
        <div className="hover:bg-red-600 w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
        <div className="w-full m-4 bg-blue-200 ">1</div>
      </div>
      <div>
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          Hello
          <br />
          World
        </span>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          Hello
          <br />
          World
        </span>
      </div>
      <div className="box-border bg-gray-100 h-[40px] w-[120px] p-[10px] border-[1px] border-red-500 hover:box-content">
        2
      </div>
      <div className="header mt-[10px] w-full flex h-[60] bg-gray-100 justify-between">
        {[
          {
            id: 1,
            name: "首页",
          },
          {
            id: 2,
            name: "首页2",
          },
          {
            id: 3,
            name: "首页3",
          },
        ].map((item) => {
          return (
            <div
              key={item.id}
              className="bg-[#3366ff] w-[120px] h-[60px] leading-[60px] text-center hover:bg-[#ff3366] cursor-pointer text-[#fff] text-[14px] font-bold rounded-md"
            >
              {item.name}
            </div>
          )
        })}
      </div>
      <div className="test-float h-[20px] mt-[40px]">
        {[1, 2, 3, 4].map((el) => {
          return (
            <div className="float-left h-[20px]" key={el}>
              {el}
            </div>
          )
        })}
      </div>
      <div>12222222</div>
      <div className="truncate">
        在上面的示例中，我们给一个包含文本的元素添加了 w-32
        类，该类设置了元素的宽度（这里是32个字符的宽度）。然后，我们添加了
        truncate 类，以指示文本溢出时应该显示省略号。
        你可以根据需要调整容器的宽度和其他样式类，以满足你的设计要求。当文本内容超过容器宽度时，文本将被截断并显示省略号，以防止溢出破坏布局。
      </div>

      <div className="line-clamp-3 ">
        在上面的示例中，我们给一个包含文本的元素添加了 w-32
        类，该类设置了元素的宽度（这里是32个字符的宽度）。然后，我们添加了
        truncate 类，以指们给一个包含文本的元素添加了 w-32
        类，该类设置了元素的宽度（这里是32个字符的宽度）。然后，我们添加了
        truncate 类，以指示文本溢出时应该显示省略号。
        你可以根据需要调整容们给一个包含文本的元素添加了 w-32
        类，该类设置了元素的宽度（这里是32个字符的宽度）。然后，我们添加了
        truncate 类，以指示文本溢出时应该显示省略号。
        你可以根据需要调整容示文本溢出时应该显示省略号。
        你可以根据需要调整容器的宽度和其他样式类，以满足你的设计要求。当文本内容超过容器宽度时，文本将被截断并显示省略号，以防止溢出破坏布局。
      </div>
      <div className="w-full h-[250px] bg-purple-100"></div>
      <div className="relative h-[50px] bg-[#333]">
        <span className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          水平 垂直 居中
        </span>
      </div>
      <div className="relative h-[250px] w-[400px] border-red-500  border-[10px]">
        <span className="bg-[#999] absolute right-0 bottom-0"> x - 30px</span>
      </div>
      <div className="flex flex-wrap items-center">
        {[1, 2, 3, 4, 2, 3, 4, 2].map((el, index) => {
          return (
            <div
              className={
                el % 2 === 0 ? "basis-1/4 bg-red-500" : "basis-1/2 bg-blue-500"
              }
              key={el + "_" + index}
            >
              {el}
            </div>
          )
        })}
      </div>
      <div ref={domRef}>观察对象</div>
    </main>
  )
}
