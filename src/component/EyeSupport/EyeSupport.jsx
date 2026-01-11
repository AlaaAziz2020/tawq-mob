import React from "react";
import "../EyeSupport/EyeSupport.css";
import fsupport from "../../assets/fsupport.png";
import eyedark from "../../assets/eyesupport.png";
import { Link } from "react-router-dom";

export default function EyeSupport() {
  return (
    <div className="support-wrapper">
      <div className="container">
        <div className="row">

          {/* ===== TABS ===== */}
          <div className="col-lg-3  d-lg-block">
            <div className="support-tabs ">

              <Link
                to="/eyesupport"
                className="support-tab active-tab text-decoration-none"
              >
                <img src={eyedark} alt="" />
                <span className="eye-text">
                  الباقات
                  </span>
              </Link>

              <Link
                to="/financialsupport"
                className="support-tab inactive-tab text-decoration-none"
              >
                <img src={fsupport} alt="" />
                <span className="f-text">الدعم المادي</span>
              </Link>

            </div>
          </div>

          {/* ===== FORM ===== */}
          <div className="col-lg-9 col-12">

            <div className="mb-4">
              <label className="label-title pt-3">الاسم</label>
              <input className="form-control input-box" placeholder="الاسم" />
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="label-title">الدولة</label>
                <input className="form-control input-box" placeholder="الدولة" />
              </div>

              <div className="col-md-6">
                <label className="label-title">المدينة / المحافظة</label>
                <input
                  className="form-control input-box"
                  placeholder="المدينة / المحافظة"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4">
                <label className="label-title">كود الدولة</label>
                <select className="form-control input-box">
                  <option>+966</option>
                  <option>+20</option>
                  <option>+971</option>
                </select>
              </div>

              <div className="col-md-8">
                <label className="label-title">رقم الهاتف</label>
                <input
                  className="form-control input-box"
                  placeholder="123 456 789"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="label-title">العنوان</label>
              <input className="form-control input-box" placeholder="العنوان" />
            </div>

            <div className="mb-4">
              <label className="label-title">نوع الدعم العيني</label>
              <input
                className="form-control input-box"
                placeholder="مثال: طعام، ملابس"
              />
            </div>

            <div className="mb-4">
              <label className="label-title">وصف المنتج</label>
              <textarea
                rows="4"
                className="form-control input-box"
                placeholder="مثال: شنطة جديدة تكفي جميع الأغراض"
              />
            </div>

            <button className="submit-btn w-100 ">
              إرسال الطلب
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
