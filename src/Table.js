import React, { useState } from "react";
import { API } from './config';
import axios from 'axios';

function Table({ columns, data }) {
    const [content, setContent] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const isClicked = (id) => {
        // axios.post(`${API.NOTICEINFO}/${id}`).then((res) => {
        //     setContent(res.data);
        //     console.log(res.data);
        // });
        setModalOpen(true);
    };

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(({ noticeId, noticeTitle, noticeDate, noticeContent }) => (
                    <tr key={noticeId}>
                        <td>{noticeId}</td>
                        <td><a href="#!">{noticeTitle}</a></td>
                        <td>{noticeDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;