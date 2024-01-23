import React, { ReactNode, useState } from 'react';
import { Button } from '../button';
import { IoChevronDown } from 'react-icons/io5';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export interface TableColumn {
    label: string;
    width?: string;
    dataIndex: string;
    render?: ReactNode;
}
interface CustomTableProps {
    headers: TableColumn[];
    data: { [key: string]: string | number | string[] | ReactNode }[];
    check?: boolean;
    className?: string;
    width?: number;
}

const Table: React.FC<CustomTableProps> = ({ headers, data, check, className, width, ...props }) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleCheckboxChange = (rowIndex: number) => {
        const updatedSelection = selectedRows.includes(rowIndex)
            ? selectedRows.filter((index) => index !== rowIndex)
            : [...selectedRows, rowIndex];

        setSelectedRows(updatedSelection);
    };
    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(Array.from({ length: data.length }, (_, index) => index));
        }
        setSelectAll(!selectAll);
    };
    return (
        <div className="flex flex-col gap-3">
            <table className={`${className} overflow-x-auto`} {...props} style={{ width: width ? width + 'px' : '' }}>
                <thead className="bg-white">
                    <tr>
                        {check ? (
                            <th className="py-2 text-left w-[20px]">
                                <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
                            </th>
                        ) : (
                            ''
                        )}
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                style={{ width: header.width || 'auto' }}
                                className="px-2 py-1 text-center text-sm font-bold text-black tracking-wider"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {check ? (
                                <td className="py-3 whitespace-nowrap text-sm text-black">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(rowIndex)}
                                        onChange={() => handleCheckboxChange(rowIndex)}
                                    />
                                </td>
                            ) : (
                                ''
                            )}
                            {headers.map((header, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{ width: header.width || 'auto' }}
                                    className="px-2 py-3  text-left text-sm text-black"
                                >
                                    {row[header.dataIndex]}
                                    {header.render}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="rounded-3xl flex items-center justify-between px-3 py-6 text-base  bg-[#f8f9fb] mb-5">
                <div className="text-black">
                    {' '}
                    1 - <span className="text-gray-400">5 of 56</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-400">The page you’re on</p>
                    <Button
                        rightIcon={<IoChevronDown />}
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        1
                    </Button>
                    <span className="text-gray-400">|</span>
                    <Button
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        <IoIosArrowRoundBack />
                    </Button>
                    <Button
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        <IoIosArrowRoundForward />
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Table;
