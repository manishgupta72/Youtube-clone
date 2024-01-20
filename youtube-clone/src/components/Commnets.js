import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
const Commnets = ({ comments }) => {
    console.log("comment in comment");
    console.log(comments?.author?.title)
    return (
        <div className='flex flex-col text-white  text-xl '>
            <h1 className='mt-[40px]'>{comments?.totalCommentsCount} </h1>
            <hr className='mt-[30px]' />
            <div className="flex mt-[50px]">
                <div className="flex items-start mb-10">
                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={comments?.author.avatar[0]?.url}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-[30px]">
                    <div className="text-white text-md font-semibold flex items-center">
                        {comments?.author?.title}
                        {comments?.author?.badges[0]?.type ===
                            "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}

                        <div className="text-white ml-2 text-md  flex flex-col items-center">
                            {comments?.publishedTimeText}

                        </div>
                    </div>

                    <div className="text-white/[0.7] text-sm">
                        {comments?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commnets