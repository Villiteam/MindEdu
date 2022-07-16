import React, { useState } from 'react';
import './form.scss';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';
const Form = () => {

    const rules = [
        {
            id: 0,
            name: 'Giáo viên'
        },
        {
            id: 1,
            name: 'Học sinh'
        },
        {
            id: 2,
            name: 'Phụ huynh'
        }
    ]

    const [ruleSelected, setRuleSelected] = useState(rules[0])

    const handleSelectRule = (item) => {
        setRuleSelected(item)
    }

    return (
        <form>
            <h2 className='form-register__title'>Yêu cầu trợ giúp</h2>
            <div className='row'>
                <div className='col-12'>
                    <Input
                        label="Họ và tên"
                        required={true}
                    />
                </div>
                <div className='col-6'>
                    <Input
                        label="Email"
                        required={true}
                    />
                </div>
                <div className='col-6'>
                    <Select
                        label="Bạn là "
                        required={true}
                        value={ruleSelected}
                        option={rules}
                        onClickOption={handleSelectRule}
                    />
                </div>
                <div className='col-12'>
                    <Input
                        label="Số điện thoại"
                        required={true}
                    />
                </div>
                <div className='col-12'>
                    <Input
                        label="Tên trường đang giảng dạy"
                    />
                </div>
                <div className='col-12'>
                    <div className='content-require'>
                        <label>Nội dung yêu cầu trợ giúp <span>*</span></label>
                        <textarea></textarea>
                    </div>
                </div>

            </div>
            <p className='note'><span>*</span>Tất cả những thông tin giáo viên cung cấp được cam kết bảo mật tuyệt đối theo chính sách của công ty LabHok</p>

            <button className='btn-submit' type='submit'>Gửi yêu cầu trợ giúp</button>
        </form>
    )
}

export default Form