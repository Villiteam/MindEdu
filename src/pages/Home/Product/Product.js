import React from 'react';
import './product.scss';

import image1 from '../../../assets/images/products/image-1.jpg'
import image2 from '../../../assets/images/products/ai.jpg'
import image3 from '../../../assets/images/products/chart.jpg'
import image4 from '../../../assets/images/products/student.jpg'

const Product = () => {

    const products = [
        {
            title: 'Tổ chức thi thử Đánh giá năng lực và THPT Quốc gia online không giới hạn',
            description: 'Mindev triển khai hệ thống thi thử phiên bản cao cấp và đa chức năng với server ổn định, bảo mật cao. Bộ đề xây mới được xây dựng bởi các Giáo viên, Giáo sư Trường Đại học Sư phạm và bám sát khung bài Thi THPT Quốc gia, Đánh giá năng lực của trường Đại học Quốc gia Hà Nội và Đại học Sư Phạm Hà Nội.',
            image: image1
        },
        {
            title: 'Tạo đề trực tuyến thần tốc với công nghệ nhận diện câu hỏi và đáp án thông minh!',
            description: 'Với công nghệ tự động nhận diện câu hỏi và đáp án thông minh của Mindev, việc tạo đề kiểm tra trực tuyến nay dễ và nhanh hơn bao giờ hết. Chỉ cần tải file .doc lên hệ thông và thầy cô đã có ngay đề sử dụng cho kiểm tra online. Ngoài ra với các tính năng bổ trợ như crop, tạo đề thủ công và tạo đề bằng ma trận câu hỏi sẽ giúp cho thầy cô tùy chỉnh đề linh hoạt theo ý muốn.',
            image: image2
        },
        {
            title: 'Quản lý điểm số lớp học, cá nhân học sinh trực quan và thuận tiện!',
            description: 'Các bài làm trực tuyến trên hệ thống Mindev được tự động chấm điểm và các thầy cô dễ dàng xuất, in kết quả, báo cáo thống kê của lớp học hoặc cá nhân học sinh để chia sẻ cho phụ huynh hoặc nhà trường.',
            image: image3
        },
        {
            title: 'Kho ngân hàng câu hỏi chất lượng cao, dễ dàng sử dụng ma trận câu hỏi để tạo đề kiểm tra!',
            description: 'Mindev hợp tác cùng với đội ngũ giảng viên trên toàn quốc và nhà xuất bản xây dựng kho ngân hàng câu hỏi chất lượng cao nhằm giúp giáo viên tạo đề kiểm tra nhanh và dễ dàng hơn khi sử dụng ma trận câu hỏi.',
            image: image4
        }
    ]

    return (
        <div className='product' id='tinh-nang'>
            <div className='product__title'>
                <h2 >Sản phẩm của chúng tôi</h2>
                <p>
                    Với Mindev, giáo viên dễ dàng giảm tải công việc hàng ngày, tăng hiệu quả giảng dạy và có thể nắm bắt năng lực của học sinh một cách nhanh chóng.
                </p>
            </div>
            <div className='product__tabs'></div>
            <div className='product__menu'>
                {
                    products.map((item, index) => (
                        <div className='product__menu__item' key={index}>
                            <div className='product__menu__item__img'>
                                <img src={item.image} />
                            </div>
                            <div className='product__menu__item__content'>
                                <h3 >{item.title}</h3>
                                <p >{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a href='/register' className='product__register'>Đăng ký</a>
        </div>
    )
}

export default Product