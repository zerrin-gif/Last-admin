
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";

export function  Rating({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
        Rating Lists
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
                <th className="pr-0" style={{ width: "30px" }}>
                  NO
                </th>
                <th style={{ minWidth: "100px" }}>CATEGORY</th>
                <th style={{ minWidth: "100px" }}>NAME</th>
                <th style={{ minWidth: "150px" }}>DESCRIPTION</th>
                <th style={{ minWidth: "100px" }}>RELEASE DATE</th>
                <th style={{ minWidth: "100px" }}>RATING</th>
                <th className="pr-0 text-right" style={{ minWidth: "200px" }}>
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
                  Movie
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Man of Street
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  2017
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  * 9.2
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
                  Show
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Cursed
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2012
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    * 8.5
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
                   Movie
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Veronica
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2018
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   * 7.0
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
                  Movie
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Troll Hunters
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  2020
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  * 9.5
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
                   Show
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   Gran Torino
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>

                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   2019
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                   * 7.5
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
