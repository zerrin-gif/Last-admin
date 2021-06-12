
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";

export function Comment({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
         Comment Lists
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
                <th className="pl-0" style={{ width: "5px" }}>
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </th>
                <th className="pr-0" style={{ width: "50px" }}>
                  NO
                </th>
                <th style={{ minWidth: "100px" }}>TITLE</th>
                <th style={{ minWidth: "100px" }}>AUTHOR</th>
                <th style={{ minWidth: "200px" }}>DESCRIPTION</th>
                <th style={{ minWidth: "100px" }}>CREATED DATE</th>
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
                    <span>1</span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Lorem ipsum
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Nick Allen
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  21 Jul,2020
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                <a href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <span>2</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hans Olo
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    12 Jun,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <input type="checkbox" value="3" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>3</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lynn Guini
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    01 Jan,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <input type="checkbox" value="4" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>4</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    aaronottix
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    19 March,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <input type="checkbox" value="5" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>5</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Marge Arita
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    21 Aug,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <input type="checkbox" value="6" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>6</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Bill Dabear
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    15 May,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
                    <input type="checkbox" value="7" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>7</span>
                  </div>
                </td>
               
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Lorem ipsum dolor
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Brock Lee
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    07 Jul,2020
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
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
