import React,{useState, useEffect} from 'react';
import { render } from '@testing-library/react';
import '../css/SubjectPicker.css';
import Classnames from 'classnames';

const subjectsData = [
    {
        code: 'ENG05.K15.CLC - EN',
        name: 'Anh văn 5',
        lecturer: 'Phạm Thị Kiều Tiên',
        credits: '4',
        lang: 'VN',
    },
    {
        code: 'ENG04.K15.CLC - EN',
        name: 'Anh văn 4',
        lecturer: 'Phạm Thị Kiều Tiên',
        credits: '4',
        lang: 'VN',
    },
]

function SubjectPicker() {

    const [listSubject, setListSubject] = useState("");

    useEffect(() => {
    }, [listSubject]);

    function renderListSubject(code, name, lecturer, credits, lang){
        return(
            <li key={code} style={{cursor: 'pointer'}} onClick={onSubjectClickHandle.bind(this, code)} className={Classnames("list-subject border-left-0 rounded-0 border-right-0 border-top-0 list-group-item", "list-subject border-left-0 rounded-0 border-right-0 border-top-0 list-group-item", {"custom-active": listSubject.includes(code)})} >
                <div>
                    <span className="pr-3 font-weight-bolder">{code}</span>
                    <span className="pr-3">{name}</span>
                    <span className="pr-3 font-weight-bold">{lecturer}</span>
                    <span className="pr-3">{credits} tín chỉ</span>
                    <span className="pr-3">{lang}</span>
                </div>
            </li>
        );
    }

    function onSubjectClickHandle(value) {
        if(!listSubject.includes(value)){
            setListSubject(listSubject.concat(value + '\n'));
        }
        else{
            setListSubject(listSubject.replace(value + '\n', ""));
        }
    }

    return(
        <div>
            <form>
                <label for="">Điền mã môn muốn đăng kí</label>
                <textarea value={listSubject} className="form-control" id="" style={{resize: "none"}} rows="5"/>
                <label for="">Chọn môn muốn đăng kí</label>
                <div>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    <div className="mt-2">
                        <ul style={{height: '35vh', overflow: 'scroll', overflowX: 'hidden'}} className="p-2 border rounded list-group">
                            {subjectsData.map(subject => {
                                return renderListSubject(subject.code, subject.name, subject.lecturer, subject.credits, subject.lang);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-dark" type="submit">Tạo thời khoá biểu</button>
                </div>
            </form>
        </div>
    );
}

export default SubjectPicker;