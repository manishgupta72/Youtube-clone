import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home", titleName: "YouTube clone || Manish Gupta" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category", titleName: "Trending" },
    { name: "Music", icon: <CgMusicNote />, type: "category", titleName: "Music" },
    { name: "Films", icon: <FiFilm />, type: "category", titleName: "Films" },
    { name: "Live", icon: <MdLiveTv />, type: "category", titleName: "Live" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category", titleName: "Gaming" },
    { name: "News", icon: <ImNewspaper />, type: "category", titleName: "YouTube" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category", titleName: "Sports" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category", titleName: "Learning" },
    { name: "Fashion & beauty", icon: <GiEclipse />, type: "category", divider: true, titleName: "Fashion & beauty" },
    { name: "Settings", icon: <FiSettings />, type: "menu", titleName: "Settings" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu", titleName: "Report History" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu", titleName: "Help" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu", titleName: "Send feedback" },
];
