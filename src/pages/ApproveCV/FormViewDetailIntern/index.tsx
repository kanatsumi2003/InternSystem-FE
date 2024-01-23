import DropdownStatus from '@/components/ui/DropDownStatus';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

type Props = {
    tabShow: number;
};

export default function FormViewDetailIntern({ tabShow }: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(tabShow);
    const handleClick = (index: number) => {
        setActiveIndex(index);
    };
    const checkActive = (index: number, className: string) =>
        activeIndex === index ? className : 'text-[#66708550] border-transparent border-b-2';
    return (
        <div className={`overflow-y-auto ${activeIndex === 3 ? 'h-[550px]' : ''}`}>
            <div className="flex gap-3 border-b-2 w-2/3  justify-between items-center mb-3">
                <div
                    onClick={() => handleClick(1)}
                    className={`${checkActive(
                        1,
                        'text-[#333333] before-tabs',
                    )} text-base font-semibold p-2 relative cursor-pointer `}
                >
                    View detail of intern{' '}
                </div>
                <div
                    onClick={() => handleClick(2)}
                    className={`${checkActive(
                        2,
                        'text-[#33333330] before-tabs',
                    )} text-base font-semibold p-2 relative cursor-pointer `}
                >
                    Comment of CV
                </div>
                <div
                    onClick={() => handleClick(3)}
                    className={`${checkActive(
                        3,
                        'text-[#33333330] before-tabs',
                    )} text-base font-semibold p-2 relative cursor-pointer`}
                >
                    Result of interview
                </div>
            </div>
            <div>
                {/* view detail Intern */}
                <form className={`panel ${checkActive(1, 'active')}`} action="" method="">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Intern ID
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Full Name
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Date of birth
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Phone Number
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Position
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                School
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Address
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Email
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Link CV
                            </label>
                            {/* <Input title="Intern Id" className="rounded-[15px]" /> */}
                            <a href="" className="text-base text-black hover:underline">
                                Link
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Rank
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                    </div>
                </form>
                {/* Comment of cv */}
                <form className={`panel ${checkActive(2, 'active')}`} action="" method="">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Major
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Programming language
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Project On GitHub
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Position
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Rank
                            </label>
                            <select className=" border border-gray-300 text-[#CBD2DC90] rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
                                <option selected>Intern/Senior/junior</option>
                                <option value="Intern">Email Interview</option>
                                <option value="Senior">Email Result</option>
                                <option value="junior">Internship information</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Add comment
                            </label>
                            <Input title="Click to add more comment" className="rounded-lg text-center bg-[#f8f9fb]" />
                        </div>
                    </div>
                    <Button leftIcon={<FaSave />} variant={'default'} size={'sm'} className="float-right mt-4 mr-10">
                        Save Comment
                    </Button>
                </form>
                {/* Result of interview */}
                <form className={`panel ${checkActive(3, 'active')} pb-4`} action="" method="">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Programming language
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Major
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Which year you are in?
                            </label>
                            <select className=" border border-gray-300 text-[#CBD2DC90] rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full">
                                <option selected>Intern/Senior/junior</option>
                                <option value="Intern">Email Interview</option>
                                <option value="Senior">Email Result</option>
                                <option value="junior">Internship information</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Why choose this major?
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Why choose to intern at Amazing Tech?
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                How do you know about Amazing Tech?
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Do you know the office address?
                            </label>
                            <select className=" border border-gray-300 text-[#CBD2DC90] rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full">
                                <option selected>yes/no</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Do you know about <span className="text-red-500">UNPAID</span> internships?
                            </label>
                            <select className=" border border-gray-300 text-[#CBD2DC90] rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full">
                                <option selected>yes/no</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                What are your desire when interning at Amazing Tech?
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Work online or offline?
                            </label>
                            <select className=" border border-gray-300 text-[#CBD2DC90] rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full">
                                <option selected>Online/Offline</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Are you busy with anything else?
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="h-12 text-base font-semibold">
                                Communication skill
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-[#A03B0F] my-4">Question of Technology</div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Question 1
                            </label>
                            <Input title="Enter item's answer" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Question 2
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Question 3
                            </label>
                            <Input title="Intern Id" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-[#A03B0F] my-4">Assign Project</div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Project's Name
                            </label>
                            <Input title="Enter item's answer" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Position
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Group Zalo
                            </label>
                            <Input title="" className="rounded-lg" />
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="text-xl font-semibold text-[#A03B0F]">Final result:</div>
                            <DropdownStatus statusOptions={['passed', 'failed']} />
                        </div>
                    </div>
                    <Button leftIcon={<FaSave />} variant={'default'} size={'sm'} className="float-right mt-4 mr-10">
                        Save Comment
                    </Button>
                </form>
            </div>
        </div>
    );
}
