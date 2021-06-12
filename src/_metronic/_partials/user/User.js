
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";

export function User({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
          User Lists
          </span>
       
<br/>
<div>
          <form className="form form-label-left">
            <div className="form-group row">
              <div className="row-lg-2">
               
                <label >
                  <b>Show:</b> 
                </label>
                <input type="number"/>
                <label><b>entries</b></label>
              </div>
            
            </div>

          </form>
          </div>
          </h3>
      
         

        <div className="card-toolbar">
       
           <label><b>Search: </b>
                  <input type="search" placeholder="" aria-controls="DataTables_Table_0" />
                  </label>
        </div>  
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        {/* begin::Table */}
        <div className="table-responsive">
          <table
            className="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_1"
          >
            <thead>
              <tr className="text-left">
                <th className="pl-0" style={{ width: "20px" }}>
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </th>
                <th className="pr-0" style={{ width: "100px" }}>
                  PROFILE
                </th>
                <th style={{ minWidth: "100px" }}>NAME</th>
                <th style={{ minWidth: "100px" }}>CONTACT</th>
                <th style={{ minWidth: "100px" }}>EMAIL</th>
                <th style={{ minWidth: "100px" }}>COUNTRY</th>
                <th style={{ minWidth: "100px" }}>STATUS</th>
                <th style={{ minWidth: "100px" }}>JOIN DATE</th>
                <th className="pr-0 text-right" style={{ minWidth: "100px" }}>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>

              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/01user.png" className="h-100 w-100 align-self-end" alt="lastNight" />
                    </span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Anna Sthesia
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  0123456789
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  anna@gmail.com
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  India
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-success label-inline">
                    Active
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    21 Jul,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                  <a href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>


        
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/02user.png" className="h-100 w-100 align-self-end" alt="lastNight" />
                    </span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Brock Lee
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2543763125
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    brock@gmail.com
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    India
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-danger label-inline">
                    Block
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    12 June,20
                  </span>
                </td>

                <td className="pr-0 text-right">
              
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/03user.png" className="h-100 w-100 align-self-end" alt="03user" />
                    </span>
                  </div>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Nick Allen
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Intertico
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    9876543210
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    nick@gmail.com
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-warning label-inline">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    10 Aug,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
              
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>


        
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/04user.png" className="h-100 w-100 align-self-end" alt="04user" />
                    </span>
                  </div>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lynn Guini
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    4536879011
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    lynn@gmail.com
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    America
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-success label-inline">
                    Active
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    29 Jul, 2020
                  </span>
                </td>

                <td className="pr-0 text-right">
              
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>

              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/05user.png" className="h-100 w-100 align-self-end" alt="05user" />
                    </span>
                  </div>
                </td>
          
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Erica Shun
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    9087562341
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    erica@gmail.com
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    England
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-danger label-inline">
                    Block
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    01 May, 2020
                  </span>
                </td>

                <td className="pr-0 text-right">
              
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>


        
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
                    <img  src=".././images/06user.png" className="h-100 w-100 align-self-end" alt="06user" />
                    </span>
                  </div>
                </td>
      
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Marge Arita
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2563549782
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    marge@gmail.com
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Russia
                  </span>
                </td>
                <td>
                <span className="label label-lg label-light-warning label-inline">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    09 May, 2020
                  </span>
                </td>

                <td className="pr-0 text-right">
              
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>

              
            </tbody>
          </table>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </div>
  );
}
