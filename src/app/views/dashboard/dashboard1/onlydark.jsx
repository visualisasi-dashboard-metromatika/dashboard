import { useCallback, useState, useEffect } from "react";
import "./dark.css";
import { Button } from "react-bootstrap";
import Line from "./charts/Line";
import Bar from "./charts/Bar";
import Gauge from "./charts/Gauge";
import Pie from "./charts/Pie";
import MonoPie from "./charts/MonoPie";
import PieStack from "./charts/PieStack";
import Donut from "./charts/Donut";
import Radar from "./charts/Radar";
import datas from "../../../../assets/json/satudata_res.json"
import axios from "axios";

const Dark = () => {
  const [data, setData] = useState([datas.result[0]]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentPage, setCurrentPage]= useState(145);
  const [totalPages, setTotalPages]= useState();

  const grtDataCallback = useCallback(async () => {
    await axios.get(`https://medansatudata-api.metromatika.com/api/public/data?page=${currentPage}`).then((result) => {
      setData(result.data.result);
      setTotalPages(result.data.totalPages);
      console.log(totalPages)
      console.log(currentPage)
      console.log(data)
    });
  }, [currentPage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentPage >= totalPages) {
        setCurrentPage(1)
        grtDataCallback();
      }else{
        setCurrentPage(currentPage + 1);
        grtDataCallback();
      }
  
    }, 2000);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentPage, grtDataCallback]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const currentDayName = dayNames[currentDateTime.getDay()];
  const currentDate = currentDateTime.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = currentDateTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

// console.log(data.length)
  return (
    <div>
      <div className="row" style={{ marginTop: "-12px" }}>
        <div className="w-1/6">
          <div className="w-1/6">
            <div className="card" style={{ borderRadius: "8px" }}>
              <button type="button" class="text-white bg-green-700 hover:bg-green-800 col-lg-12 p-0" style={{ height: "30px", fontSize: "10px", borderRadius: "6px" }}>
                <span className="ul-btn__icon">
                  <i className="i-Telephone"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6"></div>
        <div className="w-1/6 ">
          <div className="card">
            <p className="m-1 text-center" style={{ fontSize: "10" }}>
              {currentTime} WIB
            </p>
          </div>
        </div>
        <div className="w-1/6">
          <div className="card">
            <p className="m-1 text-center" style={{ fontSize: "10" }}>
              {currentDayName} / {currentDate}
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Inflasi Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card">
              <div className="row">
                <div className="col-6"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "5px" }}><b>Title 1</b></p></div>
                <div className="col-4"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Line
                  theme="dark"
                  data=""
                  dataValue=""
                  style={{ height: "190px", marginTop: "-27px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Pertumbuhan Ekonomi Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card" style={{ height: "93px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 2</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "-5px" }}>
                <Gauge
                  theme="dark"
                  height={107}
                  style={{ marginTop: "-33px" }}
                  series={80}
                />
              </div>
            </div>
            <div className="card mt-2" style={{ marginTop: "0px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 3</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "3px" }}>
                <Pie
                  theme="dark"
                  height={99}
                  style={{ marginTop: "-33px" }}
                  data={["jawa", "padang", "batak", "melayu"]}
                  dataValue={[100, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            {/* <img src={peta} alt="" style={{height:"233px"}}/> */}
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Indeks Pembangunan Manusia Kota Medan
            </Button>
          </div>
          <div className="row mt-2">
            <div className="card" style={{ height: "93px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 4</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "-5px" }}>
                <MonoPie
                  theme="dark"
                  height={90}
                  style={{ marginTop: "-24px" }}
                  data={["jawa", "padang", "batak", "melayu", "karo"]}
                  dataValue={[100, 35, 60, 80, 89]}
                />
              </div>
            </div>
            <div className="card mt-2" style={{ marginTop: "0px" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 5</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row" style={{ marginTop: "3px" }}>
                <Donut
                  theme="dark"
                  height={99}
                  style={{ marginTop: "-33px" }}
                  data={["jawa", "padang", "batak", "melayu"]}
                  dataValue={[100, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 px-3">
          <div className="row">
            <Button
              key={"dark"}
              variant={"dark"}
              className={`btn-raised btn-raised-${"dark"} text-capitalize`}
              style={{ fontSize: "10px" }}
            >
              Statistik Kesra Kota Medan
            </Button>
          </div>
          <div className="row mt-2">

            <div className="card" style={{ border: "2px solid #324f6b" }}>
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 6</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-17px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Radar
                  theme="dark"
                  height={158}
                  style={{ marginTop: "0px", marginBottom: "-24px" }}
                  data={["dayak", "jawa", "padang", "batak", "melayu"]}
                  dataValue={[9, 90, 35, 60, 80]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="w-2/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 7</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <PieStack
                  theme="dark"
                  series="Suku"
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo']}
                  dataValue={[235, 274, 310, 335, 400]}
                  style={{ height: "164px", marginTop: "-20px", marginBottom: "4px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 8</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Line
                  theme="dark"
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo']}
                  dataValue={[100, 300, 200, 100, 150]}
                  style={{ height: "190px", marginTop: "-27px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/7 px-3">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-4"><p className="card-title mt-2" style={{ marginLeft: "10px", fontSize: "10px" }}><b>Title 9</b></p></div>
                <div className="col-6"><p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>Last updated on 2 Sep 2021</p></div>
              </div>
              <div className="row">
                <Bar
                  theme="dark"
                  data={['jawa', 'padang', 'melayu', 'batak', 'karo', 'dayak']}
                  dataValue={[100, 300, 200, 100, 150, 298]}
                  style={{ height: "193px", marginTop: "-30px", marginBottom: "-15px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dark;