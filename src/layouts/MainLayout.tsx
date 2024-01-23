import { useState, type FC, type ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import useSideBar from '@/hooks/useSideBar';
import clsx from 'clsx';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';
import { useTransition, animated } from '@react-spring/web';
import { Accordion } from '@/components/ui/accordion';
import { Settings } from 'lucide-react';

interface MainLayoutProps {
    children?: ReactNode;
}
const smSize = 640;
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const routeList = useSideBar();
    const [isShow, setIsShow] = useState(true);
    const transitions = useTransition(isShow, {
        from: { opacity: 0, x: -100 },
        enter: { opacity: 1, x: 0 },
    });
    return (
        <>
            <div className="h-screen flex relative">
                {transitions(
                    (style, item) =>
                        item && (
                            <animated.div
                                style={style}
                                className="min-w-[200px] backdrop-blur-md  z-20 sm:block sm:relative"
                            >
                                <div className="w-5/6 sm:w-full h-full bg-background ">
                                    <h1 className=" bg-background flex gap-2 items-center ">
                                        <img src={logo} className="w-[270px] transition-all  object-contain  " />

                                        {item && (
                                            <span
                                                className="text-xl pr-3 cursor-pointer sm:hidden flex-1 flex justify-end "
                                                onClick={() => {
                                                    setIsShow(!isShow);
                                                }}
                                            >
                                                <RiMenuFoldFill />
                                            </span>
                                        )}
                                    </h1>
                                    <div className="flex flex-col  py-1 px-2  font-medium h-full">
                                        <Accordion type="single" collapsible className="w-full border-0 ">
                                            {routeList.map((route) => (
                                                <NavLink
                                                    key={route.href}
                                                    to={route.href}
                                                    className={({ isActive }) => {
                                                        return clsx(
                                                            'transition-all duration-500 ease-out ',
                                                            isActive ? 'bg-slate-50 rounded-md px-2' : ' ',
                                                        );
                                                    }}
                                                >
                                                    <div
                                                        className=" flex  gap-2 items-center px-2 py-1"
                                                        onClick={() => {
                                                            if (window.innerWidth < smSize) {
                                                                setIsShow(false);
                                                            }
                                                        }}
                                                    >
                                                        {route.item}
                                                    </div>
                                                </NavLink>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            </animated.div>
                        ),
                )}
                {/* <div className="flex flex-col w-full h-full  transition-all duration-300 ease-linear">
                    <div className=" p-4  flex gap-2 items-center w-full shadow-lg border-b-2  ">
                        <span
                            className="text-xl  block  sm:pr-3 pr-1 cursor-pointer"
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        >
                            {isShow ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                        </span>
                        <div className="flex-1 ">Select</div>
                    </div>

                    <div className="flex-1 p-3 rounded-lg bg-secondary">{children || <Outlet />}</div>
                </div> */}
                <div className="flex flex-col w-full h-full  transition-all duration-300 ease-linear">
                    <div className=" p-4  flex gap-2 items-center w-full shadow-lg border-b-2  ">
                        <span
                            className="text-xl  block  sm:pr-3 pr-1 cursor-pointer"
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        >
                            {isShow ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                        </span>
                        <div className="flex-1 font-bold text-2xl">Project Management</div>
                        <div className="flex items-center gap-10 pr-5">
                            <div className="flex items-center gap-5">
                                <img
                                    className="w-12 rounded-full h-12 object-cover"
                                    src="https://i.pinimg.com/originals/75/d6/12/75d6122004849a1b812e17ecd0771eb1.jpg"
                                    alt="image"
                                />
                                <div>
                                    <h3 className="text-lg font-medium">Nhật Hào</h3>
                                    <p className="text-sm font-nornal text-gray-400">Admin</p>
                                </div>
                            </div>
                            <Settings />
                        </div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-secondary">{children || <Outlet />}</div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
