import { lazy } from "react";

const Dashboard1 = lazy(() => import("./dashboard1/dashboard"));
const Dashboard2 = lazy(() => import("./dashboard1/MediaSosial/dashboardMedsos"));
const Dashboard3 = lazy(() => import("./dashboard1/MedanSatuData/dashboardSatuData"));
const Dashboard4 = lazy(() => import("./dashboard1/MedanSatuData/adminKotaMedan"));
const Dashboard5 = lazy(() => import("./dashboard1/MedanSatuData/dinasPariwisata"));
const Dashboard6 = lazy(() => import("./dashboard1/MedanSatuData/dinasPenanamanModaldanPelayananTerpaduSatuPintu"));
const Dashboard7 = lazy(() => import("./dashboard1/MedanSatuData/badanKesatuanBangsadanPolitik"));
const Dashboard8 = lazy(() => import("./dashboard1/MedanSatuData/badanRisetdanInovasiDaerah"));
const Dashboard9 = lazy(() => import("./dashboard1/MedanSatuData/dinasPerpustakaandanKearsipan"));
const Dashboard10 = lazy(() => import("./dashboard1/MedanSatuData/badanPenanggulanganBencanaDaerah"));
const Dashboard11 = lazy(() => import("./dashboard1/MedanSatuData/badanKepegawaiandanPengembanganSumberDayaManusia"));
const Dashboard12 = lazy(() => import("./dashboard1/MedanSatuData/dinasPemadamKebakarandanPenyelamatan"));
const Dashboard13 = lazy(() => import("./dashboard1/MedanSatuData/dinasPendidikandanKebudayaan"));
const Dashboard14 = lazy(() => import("./dashboard1/MedanSatuData/dinasKesehatan"));
const Dashboard15 = lazy(() => import("./dashboard1/MedanSatuData/dinasKetahananPanganPertaniandanPerikanan"));
const Dashboard16 = lazy(() => import("./dashboard1/MedanSatuData/dinasPemudadanOlahraga"));
const Dashboard17 = lazy(() => import("./dashboard1/MedanSatuData/satuanPolisiPramongPraja"));
const Dashboard18 = lazy(() => import("./dashboard1/MedanSatuData/dinasSosial"));
const Dashboard19 = lazy(() => import("./dashboard1/MedanSatuData/dinasKetenagakerjaan"));
const Dashboard20 = lazy(() => import("./dashboard1/MedanSatuData/rsudDrPirngadi"));
const Dashboard21 = lazy(() => import("./dashboard1/MedanSatuData/dinasKependudukandanPencatatanSipil"));
const Dashboard22 = lazy(() => import("./dashboard1/MedanSatuData/dinasLingkunganHidup"));
const Dashboard23 = lazy(() => import("./dashboard1/MedanSatuData/dinasLingkunganHidup"));
const Dashboard24 = lazy(() => import("./dashboard1/MedanSatuData/dinasPerumahanKawasanPermukimanCiptaKaryadanTataRuang"));
const Dashboard25 = lazy(() => import("./dashboard1/MedanSatuData/dinasKetahananPanganPertaniandanPerikanan"));
const Dashboard26 = lazy(() => import("./dashboard1/MedanSatuData/dinasPemberdayaanPerempuanPerlindunganAnakPemberdayaanMasyarakatdanpengendalianPendudukdanKeluargaBerencana"));
const Dashboard27 = lazy(() => import("./dashboard1/MedanSatuData/badanPendapatanDaerahKotaMedan"));
const Dashboard28 = lazy(() => import("./dashboard1/MedanSatuData/dinasKoperasiUsahaKecilMenengahPerindustriandanPerdagangan"));
const Dashboard29 = lazy(() => import("./dashboard1/MedanSatuData/dinasPerhubungan"));
const Dashboard30 = lazy(() => import("./dashboard1/MedanSatuData/dinasKomunikasidanInformatika"));
const Dashboard31 = lazy(() => import("./dashboard1/MedanSatuData/badanPerencanaanPembangunanDaerah"));
const Dashboard32 = lazy(() => import("./dashboard1/MedanSatuData/badanKeuangandanAsetDaerah"));
const Dashboard33 = lazy(() => import("./dashboard1/MedanSatuData/inspektorat"));
const Dashboard34 = lazy(() => import("./dashboard1/MedanSatuData/sekretariatDPRD"));
const Dashboard35 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanAmplas"));
const Dashboard36 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanArea"));
const Dashboard37 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanBarat"));
const Dashboard38 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanBaru"));
const Dashboard39 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanDeli"));
const Dashboard40 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanDenai"));
const Dashboard41 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanHelvetia"));
const Dashboard42 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanJohor"));
const Dashboard43 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanKota"));
const Dashboard44 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanLabuhan"));
const Dashboard45 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanMaimun"));
const Dashboard46 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanMarelan"));
const Dashboard47 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanPerjuangan"));
const Dashboard48 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanPetisah"));
const Dashboard49 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanPolonia"));
const Dashboard50 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanSelayang"));
const Dashboard51 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanSunggal"));
const Dashboard52 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanTembung"));
const Dashboard53 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanTimur"));
const Dashboard54 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanTuntungan"));
const Dashboard55 = lazy(() => import("./dashboard1/MedanSatuData/kecamatanMedanBelawan"));

const dashboardRoutes = [
  {
    path: "/dashboard/v1",
    element: <Dashboard1 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v2",
    element: <Dashboard2 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v3",
    element: <Dashboard3 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v4",
    element: <Dashboard4 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v5",
    element: <Dashboard5 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v6",
    element: <Dashboard6 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v7",
    element: <Dashboard7 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v8",
    element: <Dashboard8 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v9",
    element: <Dashboard9 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v10",
    element: <Dashboard10 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v11",
    element: <Dashboard11 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v12",
    element: <Dashboard12 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v13",
    element: <Dashboard13 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v14",
    element: <Dashboard14 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v15",
    element: <Dashboard15 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v16",
    element: <Dashboard16 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v17",
    element: <Dashboard17 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v18",
    element: <Dashboard18 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v19",
    element: <Dashboard19 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v20",
    element: <Dashboard20 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v21",
    element: <Dashboard21 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v22",
    element: <Dashboard22 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v23",
    element: <Dashboard23 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v24",
    element: <Dashboard24 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v25",
    element: <Dashboard25 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v26",
    element: <Dashboard26 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v27",
    element: <Dashboard27 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v28",
    element: <Dashboard28 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v29",
    element: <Dashboard29 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v30",
    element: <Dashboard30 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v31",
    element: <Dashboard31 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v32",
    element: <Dashboard32 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v33",
    element: <Dashboard33 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v34",
    element: <Dashboard34 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v35",
    element: <Dashboard35 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v36",
    element: <Dashboard36 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v37",
    element: <Dashboard37 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v38",
    element: <Dashboard38 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v39",
    element: <Dashboard39 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v40",
    element: <Dashboard40 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v41",
    element: <Dashboard41 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v42",
    element: <Dashboard42 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v43",
    element: <Dashboard43 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v44",
    element: <Dashboard44 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v45",
    element: <Dashboard45 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v46",
    element: <Dashboard46 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v47",
    element: <Dashboard47 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v48",
    element: <Dashboard48 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v49",
    element: <Dashboard49 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v50",
    element: <Dashboard50 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v51",
    element: <Dashboard51 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v52",
    element: <Dashboard52 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v53",
    element: <Dashboard53 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v54",
    element: <Dashboard54 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v55",
    element: <Dashboard55 />,
    // auth: authRoles.admin,
  },
];

export default dashboardRoutes;
