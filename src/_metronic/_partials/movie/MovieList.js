
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";
export function MovieList({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Movie Lists
          </span>
          </h3>
        
        <div className="card-toolbar">
          <a
            href="#"
            className="btn btn-danger font-weight-bolder font-size-sm"
          >
            Add Movie
          </a>
        </div>
      

      </div>
      <div>
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
                <th className="pr-0" style={{ width: "20px" }}>
                  MOVIE
                </th>
                <th style={{ minWidth: "20px" }} />
                <th style={{ minWidth: "50px" }}>QUALITY</th>
                <th style={{ minWidth: "100px" }}>CATEGORY</th>
                <th style={{ minWidth: "100px" }}>RELEASE YEAR</th>
                <th style={{ minWidth: "100px" }}>LANGUAGE</th>
                <th style={{ minWidth: "150px" }}>DESCRIPTION</th>
                <th className="pr-0 text-right" style={{ minWidth: "150px" }}>
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
                    <img  src=".././images/lastNight.png" className="h-100 w-100 align-self-end" alt="lastNight" />
                    </span>
                  </div>
                </td>
               
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-lightv mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>
                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light  mt-1">
                    <span className="symbol-label">
    <img  src=".././images/lastNight.png" className="h-100 w-100 align-self-end" alt="lastNight" />
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />
    </span>
  </div>
</td>

<td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/jeonWoochis.png" className="h-100 w-100 align-self-end" alt="jeonWoochis" />
    </span>
  </div>
</td>

<td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/lastBreath.png" className="h-100 w-100 align-self-end" alt="lastBreath" />
    </span>
  </div>
</td>

<td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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
    <input type="checkbox" value="1" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span className="symbol-label">
    <img  src=".././images/jeonWoochis.png" className="h-100 w-100 align-self-end" alt="jeonWoochis" />
    </span>
  </div>
</td>

<td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    1980
                  </a>
                  <span className="text-muted font-weight-bold text-muted d-block">
                    2h 15m
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    HD
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    2010
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Hindi
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Lorem ipsum dolor sit amet...
                  </span>
                </td>
                
                <td className="pr-0 text-right">
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Visible.svg"
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