import React from "react";
import {API} from './config';

function Table({ columns, data }) {
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
                {data.map(({ noticeId, noticeTitle, noticeDate }) => (
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