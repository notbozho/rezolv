import React from "react";

export default function Squares() {
    return (
        <svg
            width="1440"
            height="919"
            viewBox="0 0 1440 919"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full opacity-30 invert"
        >
            <defs>
                <mask id="fade-mask">
                    <linearGradient
                        id="white-to-transparent"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="80%"
                    >
                        <stop offset="40%" stop-color="white" stopOpacity={1} />
                        <stop
                            offset="100%"
                            stop-color="black"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <rect
                        width="1440"
                        height="919"
                        fill="url(#white-to-transparent)"
                    />
                </mask>
            </defs>

            {/* <rect width="1440" height="919" fill="url(#white-to-transparent)" /> */}
            <g mask="url(#fade-mask)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 20H11V90H81V20ZM10 19V91H82V19H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 20H82V90H152V20ZM81 19V91H153V19H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 20H153V90H223V20ZM152 19V91H224V19H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 20H224V90H294V20ZM223 19V91H295V19H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 20H295V90H365V20ZM294 19V91H366V19H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 20H366V90H436V20ZM365 19V91H437V19H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 20H437V90H507V20ZM436 19V91H508V19H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 20H508V90H578V20ZM507 19V91H579V19H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 20H579V90H649V20ZM578 19V91H650V19H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 20H650V90H720V20ZM649 19V91H721V19H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 20H721V90H791V20ZM720 19V91H792V19H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 20H792V90H862V20ZM791 19V91H863V19H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 20H863V90H933V20ZM862 19V91H934V19H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 20H934V90H1004V20ZM933 19V91H1005V19H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 20H1005V90H1075V20ZM1004 19V91H1076V19H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 20H1076V90H1146V20ZM1075 19V91H1147V19H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 20H1147V90H1217V20ZM1146 19V91H1218V19H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 20H1218V90H1288V20ZM1217 19V91H1289V19H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 20H1289V90H1359V20ZM1288 19V91H1360V19H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 20H1360V90H1430V20ZM1359 19V91H1431V19H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 91H11V161H81V91ZM10 90V162H82V90H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 91H82V161H152V91ZM81 90V162H153V90H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 91H153V161H223V91ZM152 90V162H224V90H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 91H224V161H294V91ZM223 90V162H295V90H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 91H295V161H365V91ZM294 90V162H366V90H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 91H366V161H436V91ZM365 90V162H437V90H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 91H437V161H507V91ZM436 90V162H508V90H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 91H508V161H578V91ZM507 90V162H579V90H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 91H579V161H649V91ZM578 90V162H650V90H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 91H650V161H720V91ZM649 90V162H721V90H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 91H721V161H791V91ZM720 90V162H792V90H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 91H792V161H862V91ZM791 90V162H863V90H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 91H863V161H933V91ZM862 90V162H934V90H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 91H934V161H1004V91ZM933 90V162H1005V90H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 91H1005V161H1075V91ZM1004 90V162H1076V90H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 91H1076V161H1146V91ZM1075 90V162H1147V90H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 91H1147V161H1217V91ZM1146 90V162H1218V90H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 91H1218V161H1288V91ZM1217 90V162H1289V90H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 91H1289V161H1359V91ZM1288 90V162H1360V90H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 91H1360V161H1430V91ZM1359 90V162H1431V90H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 162H11V232H81V162ZM10 161V233H82V161H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 162H82V232H152V162ZM81 161V233H153V161H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 162H153V232H223V162ZM152 161V233H224V161H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 162H224V232H294V162ZM223 161V233H295V161H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 162H295V232H365V162ZM294 161V233H366V161H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 162H366V232H436V162ZM365 161V233H437V161H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 162H437V232H507V162ZM436 161V233H508V161H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 162H508V232H578V162ZM507 161V233H579V161H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 162H579V232H649V162ZM578 161V233H650V161H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 162H650V232H720V162ZM649 161V233H721V161H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 162H721V232H791V162ZM720 161V233H792V161H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 162H792V232H862V162ZM791 161V233H863V161H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 162H863V232H933V162ZM862 161V233H934V161H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 162H934V232H1004V162ZM933 161V233H1005V161H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 162H1005V232H1075V162ZM1004 161V233H1076V161H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 162H1076V232H1146V162ZM1075 161V233H1147V161H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 162H1147V232H1217V162ZM1146 161V233H1218V161H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 162H1218V232H1288V162ZM1217 161V233H1289V161H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 162H1289V232H1359V162ZM1288 161V233H1360V161H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 162H1360V232H1430V162ZM1359 161V233H1431V161H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 233H11V303H81V233ZM10 232V304H82V232H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 233H82V303H152V233ZM81 232V304H153V232H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 233H153V303H223V233ZM152 232V304H224V232H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 233H224V303H294V233ZM223 232V304H295V232H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 233H295V303H365V233ZM294 232V304H366V232H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 233H366V303H436V233ZM365 232V304H437V232H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 233H437V303H507V233ZM436 232V304H508V232H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 233H508V303H578V233ZM507 232V304H579V232H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 233H579V303H649V233ZM578 232V304H650V232H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 233H650V303H720V233ZM649 232V304H721V232H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 233H721V303H791V233ZM720 232V304H792V232H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 233H792V303H862V233ZM791 232V304H863V232H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 233H863V303H933V233ZM862 232V304H934V232H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 233H934V303H1004V233ZM933 232V304H1005V232H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 233H1005V303H1075V233ZM1004 232V304H1076V232H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 233H1076V303H1146V233ZM1075 232V304H1147V232H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 233H1147V303H1217V233ZM1146 232V304H1218V232H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 233H1218V303H1288V233ZM1217 232V304H1289V232H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 233H1289V303H1359V233ZM1288 232V304H1360V232H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 233H1360V303H1430V233ZM1359 232V304H1431V232H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 304H11V374H81V304ZM10 303V375H82V303H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 304H82V374H152V304ZM81 303V375H153V303H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 304H153V374H223V304ZM152 303V375H224V303H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 304H224V374H294V304ZM223 303V375H295V303H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 304H295V374H365V304ZM294 303V375H366V303H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 304H366V374H436V304ZM365 303V375H437V303H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 304H437V374H507V304ZM436 303V375H508V303H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 304H508V374H578V304ZM507 303V375H579V303H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 304H579V374H649V304ZM578 303V375H650V303H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 304H650V374H720V304ZM649 303V375H721V303H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 304H721V374H791V304ZM720 303V375H792V303H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 304H792V374H862V304ZM791 303V375H863V303H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 304H863V374H933V304ZM862 303V375H934V303H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 304H934V374H1004V304ZM933 303V375H1005V303H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 304H1005V374H1075V304ZM1004 303V375H1076V303H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 304H1076V374H1146V304ZM1075 303V375H1147V303H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 304H1147V374H1217V304ZM1146 303V375H1218V303H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 304H1218V374H1288V304ZM1217 303V375H1289V303H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 304H1289V374H1359V304ZM1288 303V375H1360V303H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 304H1360V374H1430V304ZM1359 303V375H1431V303H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 375H11V445H81V375ZM10 374V446H82V374H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 375H82V445H152V375ZM81 374V446H153V374H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 375H153V445H223V375ZM152 374V446H224V374H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 375H224V445H294V375ZM223 374V446H295V374H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 375H295V445H365V375ZM294 374V446H366V374H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 375H366V445H436V375ZM365 374V446H437V374H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 375H437V445H507V375ZM436 374V446H508V374H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 375H508V445H578V375ZM507 374V446H579V374H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 375H579V445H649V375ZM578 374V446H650V374H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 375H650V445H720V375ZM649 374V446H721V374H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 375H721V445H791V375ZM720 374V446H792V374H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 375H792V445H862V375ZM791 374V446H863V374H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 375H863V445H933V375ZM862 374V446H934V374H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 375H934V445H1004V375ZM933 374V446H1005V374H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 375H1005V445H1075V375ZM1004 374V446H1076V374H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 375H1076V445H1146V375ZM1075 374V446H1147V374H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 375H1147V445H1217V375ZM1146 374V446H1218V374H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 375H1218V445H1288V375ZM1217 374V446H1289V374H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 375H1289V445H1359V375ZM1288 374V446H1360V374H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 375H1360V445H1430V375ZM1359 374V446H1431V374H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 446H11V516H81V446ZM10 445V517H82V445H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 446H82V516H152V446ZM81 445V517H153V445H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 446H153V516H223V446ZM152 445V517H224V445H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 446H224V516H294V446ZM223 445V517H295V445H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 446H295V516H365V446ZM294 445V517H366V445H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 446H366V516H436V446ZM365 445V517H437V445H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 446H437V516H507V446ZM436 445V517H508V445H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 446H508V516H578V446ZM507 445V517H579V445H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 446H579V516H649V446ZM578 445V517H650V445H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 446H650V516H720V446ZM649 445V517H721V445H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 446H721V516H791V446ZM720 445V517H792V445H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 446H792V516H862V446ZM791 445V517H863V445H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 446H863V516H933V446ZM862 445V517H934V445H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 446H934V516H1004V446ZM933 445V517H1005V445H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 446H1005V516H1075V446ZM1004 445V517H1076V445H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 446H1076V516H1146V446ZM1075 445V517H1147V445H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 446H1147V516H1217V446ZM1146 445V517H1218V445H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 446H1218V516H1288V446ZM1217 445V517H1289V445H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 446H1289V516H1359V446ZM1288 445V517H1360V445H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 446H1360V516H1430V446ZM1359 445V517H1431V445H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 517H11V587H81V517ZM10 516V588H82V516H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 517H82V587H152V517ZM81 516V588H153V516H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 517H153V587H223V517ZM152 516V588H224V516H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 517H224V587H294V517ZM223 516V588H295V516H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 517H295V587H365V517ZM294 516V588H366V516H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 517H366V587H436V517ZM365 516V588H437V516H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 517H437V587H507V517ZM436 516V588H508V516H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 517H508V587H578V517ZM507 516V588H579V516H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 517H579V587H649V517ZM578 516V588H650V516H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 517H650V587H720V517ZM649 516V588H721V516H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 517H721V587H791V517ZM720 516V588H792V516H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 517H792V587H862V517ZM791 516V588H863V516H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 517H863V587H933V517ZM862 516V588H934V516H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 517H934V587H1004V517ZM933 516V588H1005V516H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 517H1005V587H1075V517ZM1004 516V588H1076V516H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 517H1076V587H1146V517ZM1075 516V588H1147V516H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 517H1147V587H1217V517ZM1146 516V588H1218V516H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 517H1218V587H1288V517ZM1217 516V588H1289V516H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 517H1289V587H1359V517ZM1288 516V588H1360V516H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 517H1360V587H1430V517ZM1359 516V588H1431V516H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 588H11V658H81V588ZM10 587V659H82V587H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 588H82V658H152V588ZM81 587V659H153V587H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 588H153V658H223V588ZM152 587V659H224V587H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 588H224V658H294V588ZM223 587V659H295V587H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 588H295V658H365V588ZM294 587V659H366V587H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 588H366V658H436V588ZM365 587V659H437V587H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 588H437V658H507V588ZM436 587V659H508V587H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 588H508V658H578V588ZM507 587V659H579V587H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 588H579V658H649V588ZM578 587V659H650V587H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 588H650V658H720V588ZM649 587V659H721V587H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 588H721V658H791V588ZM720 587V659H792V587H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 588H792V658H862V588ZM791 587V659H863V587H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 588H863V658H933V588ZM862 587V659H934V587H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 588H934V658H1004V588ZM933 587V659H1005V587H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 588H1005V658H1075V588ZM1004 587V659H1076V587H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 588H1076V658H1146V588ZM1075 587V659H1147V587H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 588H1147V658H1217V588ZM1146 587V659H1218V587H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 588H1218V658H1288V588ZM1217 587V659H1289V587H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 588H1289V658H1359V588ZM1288 587V659H1360V587H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 588H1360V658H1430V588ZM1359 587V659H1431V587H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 659H11V729H81V659ZM10 658V730H82V658H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 659H82V729H152V659ZM81 658V730H153V658H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 659H153V729H223V659ZM152 658V730H224V658H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 659H224V729H294V659ZM223 658V730H295V658H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 659H295V729H365V659ZM294 658V730H366V658H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 659H366V729H436V659ZM365 658V730H437V658H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 659H437V729H507V659ZM436 658V730H508V658H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 659H508V729H578V659ZM507 658V730H579V658H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 659H579V729H649V659ZM578 658V730H650V658H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 659H650V729H720V659ZM649 658V730H721V658H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 659H721V729H791V659ZM720 658V730H792V658H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 659H792V729H862V659ZM791 658V730H863V658H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 659H863V729H933V659ZM862 658V730H934V658H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 659H934V729H1004V659ZM933 658V730H1005V658H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 659H1005V729H1075V659ZM1004 658V730H1076V658H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 659H1076V729H1146V659ZM1075 658V730H1147V658H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 659H1147V729H1217V659ZM1146 658V730H1218V658H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 659H1218V729H1288V659ZM1217 658V730H1289V658H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 659H1289V729H1359V659ZM1288 658V730H1360V658H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 659H1360V729H1430V659ZM1359 658V730H1431V658H1359Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81 730H11V800H81V730ZM10 729V801H82V729H10Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M152 730H82V800H152V730ZM81 729V801H153V729H81Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M223 730H153V800H223V730ZM152 729V801H224V729H152Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M294 730H224V800H294V730ZM223 729V801H295V729H223Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M365 730H295V800H365V730ZM294 729V801H366V729H294Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M436 730H366V800H436V730ZM365 729V801H437V729H365Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M507 730H437V800H507V730ZM436 729V801H508V729H436Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M578 730H508V800H578V730ZM507 729V801H579V729H507Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M649 730H579V800H649V730ZM578 729V801H650V729H578Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M720 730H650V800H720V730ZM649 729V801H721V729H649Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M791 730H721V800H791V730ZM720 729V801H792V729H720Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M862 730H792V800H862V730ZM791 729V801H863V729H791Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M933 730H863V800H933V730ZM862 729V801H934V729H862Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1004 730H934V800H1004V730ZM933 729V801H1005V729H933Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1075 730H1005V800H1075V730ZM1004 729V801H1076V729H1004Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1146 730H1076V800H1146V730ZM1075 729V801H1147V729H1075Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1217 730H1147V800H1217V730ZM1146 729V801H1218V729H1146Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1288 730H1218V800H1288V730ZM1217 729V801H1289V729H1217Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1359 730H1289V800H1359V730ZM1288 729V801H1360V729H1288Z"
                    fill="#E2E2E2"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1430 730H1360V800H1430V730ZM1359 729V801H1431V729H1359Z"
                    fill="#E2E2E2"
                />
                <line
                    x1="729"
                    y1="445.5"
                    x2="713"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="720.5"
                    y1="453"
                    x2="720.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="729"
                    y1="232.5"
                    x2="713"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="720.5"
                    y1="240"
                    x2="720.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="729"
                    y1="587.5"
                    x2="713"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="720.5"
                    y1="595"
                    x2="720.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="729"
                    y1="729.5"
                    x2="713"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="720.5"
                    y1="737"
                    x2="720.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line x1="729" y1="90.5" x2="713" y2="90.5" stroke="#3F3F3F" />
                <line x1="720.5" y1="98" x2="720.5" y2="82" stroke="#3F3F3F" />
                <line
                    x1="516"
                    y1="445.5"
                    x2="500"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="507.5"
                    y1="453"
                    x2="507.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="516"
                    y1="232.5"
                    x2="500"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="507.5"
                    y1="240"
                    x2="507.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="516"
                    y1="587.5"
                    x2="500"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="507.5"
                    y1="595"
                    x2="507.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="516"
                    y1="729.5"
                    x2="500"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="507.5"
                    y1="737"
                    x2="507.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line x1="516" y1="90.5" x2="500" y2="90.5" stroke="#3F3F3F" />
                <line x1="507.5" y1="98" x2="507.5" y2="82" stroke="#3F3F3F" />
                <line
                    x1="303"
                    y1="445.5"
                    x2="287"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="294.5"
                    y1="453"
                    x2="294.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="303"
                    y1="232.5"
                    x2="287"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="294.5"
                    y1="240"
                    x2="294.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="303"
                    y1="587.5"
                    x2="287"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="294.5"
                    y1="595"
                    x2="294.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="303"
                    y1="729.5"
                    x2="287"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="294.5"
                    y1="737"
                    x2="294.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line x1="303" y1="90.5" x2="287" y2="90.5" stroke="#3F3F3F" />
                <line x1="294.5" y1="98" x2="294.5" y2="82" stroke="#3F3F3F" />
                <line x1="90" y1="445.5" x2="74" y2="445.5" stroke="#3F3F3F" />
                <line x1="81.5" y1="453" x2="81.5" y2="437" stroke="#3F3F3F" />
                <line x1="90" y1="232.5" x2="74" y2="232.5" stroke="#3F3F3F" />
                <line x1="81.5" y1="240" x2="81.5" y2="224" stroke="#3F3F3F" />
                <line x1="90" y1="587.5" x2="74" y2="587.5" stroke="#3F3F3F" />
                <line x1="81.5" y1="595" x2="81.5" y2="579" stroke="#3F3F3F" />
                <line x1="90" y1="729.5" x2="74" y2="729.5" stroke="#3F3F3F" />
                <line x1="81.5" y1="737" x2="81.5" y2="721" stroke="#3F3F3F" />
                <line x1="90" y1="90.5" x2="74" y2="90.5" stroke="#3F3F3F" />
                <line x1="81.5" y1="98" x2="81.5" y2="82" stroke="#3F3F3F" />
                <line
                    x1="942"
                    y1="445.5"
                    x2="926"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="933.5"
                    y1="453"
                    x2="933.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="942"
                    y1="232.5"
                    x2="926"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="933.5"
                    y1="240"
                    x2="933.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="942"
                    y1="587.5"
                    x2="926"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="933.5"
                    y1="595"
                    x2="933.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="942"
                    y1="729.5"
                    x2="926"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="933.5"
                    y1="737"
                    x2="933.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line x1="942" y1="90.5" x2="926" y2="90.5" stroke="#3F3F3F" />
                <line x1="933.5" y1="98" x2="933.5" y2="82" stroke="#3F3F3F" />
                <line
                    x1="1155"
                    y1="445.5"
                    x2="1139"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1146.5"
                    y1="453"
                    x2="1146.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1155"
                    y1="232.5"
                    x2="1139"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1146.5"
                    y1="240"
                    x2="1146.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1155"
                    y1="587.5"
                    x2="1139"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1146.5"
                    y1="595"
                    x2="1146.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1155"
                    y1="729.5"
                    x2="1139"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1146.5"
                    y1="737"
                    x2="1146.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1155"
                    y1="90.5"
                    x2="1139"
                    y2="90.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1146.5"
                    y1="98"
                    x2="1146.5"
                    y2="82"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1368"
                    y1="445.5"
                    x2="1352"
                    y2="445.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1359.5"
                    y1="453"
                    x2="1359.5"
                    y2="437"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1368"
                    y1="232.5"
                    x2="1352"
                    y2="232.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1359.5"
                    y1="240"
                    x2="1359.5"
                    y2="224"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1368"
                    y1="587.5"
                    x2="1352"
                    y2="587.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1359.5"
                    y1="595"
                    x2="1359.5"
                    y2="579"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1368"
                    y1="729.5"
                    x2="1352"
                    y2="729.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1359.5"
                    y1="737"
                    x2="1359.5"
                    y2="721"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1368"
                    y1="90.5"
                    x2="1352"
                    y2="90.5"
                    stroke="#3F3F3F"
                />
                <line
                    x1="1359.5"
                    y1="98"
                    x2="1359.5"
                    y2="82"
                    stroke="#3F3F3F"
                />
            </g>
        </svg>
    );
}
