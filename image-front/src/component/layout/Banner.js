import '../../Banner.css';
const Banner = () => {
    return(
    <div className="banner">
        <img src="./images/banner-image.jpg" className="banner-image"/>
        <div className='banner-text'>
            <h1>웹 사이트에 오신것을 환영합니다.</h1>
            <p>여기는 홈페이지 입니다.</p>
        </div>
    </div>
    )
}
export default Banner;