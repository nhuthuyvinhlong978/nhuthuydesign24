import education from "../../../Resource/education.json"
import Navigation from "../../../Components/Navigation"
import "../../../App.css";
import { useHistory } from "react-router-dom";
export default function HomeScreens(){
    <Navigation></Navigation>
    const history = useHistory();

    const hanldeClick = (slug) => {
        history.push(`/details/${slug}`)
    }
    const lists = education?.course?.map((element, index) => {
        return (
            <div className="col-md-6 col-sm-12 col-lg-4 mt-3">
                <div className="course-item">
                <img className='course-image' onClick={() => {hanldeClick(element.slug)}} src={element.image} alt="" />
                    <div className="course-body"></div>
                    <h5 className="course-name" onClick={() => {hanldeClick(element.slug)}}>{element.name}</h5>
                    <p><span class="course-info">Ngày khai giảng: </span>{element.startDate}</p>
                    <div class="course-info"><span>Trình độ: </span>{element.level}</div>
                    <div class="course-info"><span>Lịch học: </span>{element.schedule}</div>
                    <div class="course-info"><span>Thời gian:</span> {element.time}</div>
                    <div class="course-info"><span>Dựng phim cơ bản:</span> {element.slug}</div>
                    <div className="course-bottom"> Giảm 15% học phí khi đăng ký trước 30/1/2022</div>
                    <div class="MuiGrid-root mt-3 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4"></div>
                    <div class="wrap-course"></div> 
                </div>
                
                
                
            </div>
            
        )
    })
    return(
        // <div >
        //     {/* <div className="row"> */}
            <div className='container course-container'>
            <div className="row course-list">
                {lists}
            </div>
        </div>
    )
}