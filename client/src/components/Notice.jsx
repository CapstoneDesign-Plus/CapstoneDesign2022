<<<<<<< HEAD
import React ,{Component} from "react";
import { Link, useNavigate } from "react-router-dom";
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 7c79459386649f13b0590d23e4cb0aded47b6346
import {
  Box,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  List,
  ListItem
} from "@mui/material";
import style from "../style/notice.scss";

import WebServiceManager from "../util/webservice_manager";

class Notice extends Component {

  constructor(props) {
    super(props);
    this.contents=[];
    this.state={
        noticeContents:[],
        
      }
  }
  
  componentDidMount(){
    this.callGetRepairAPI().then((response) => {
      this.contents=response.result.values;
      this.setState({noticeContents:response.result.values});
  })}

  async callGetRepairAPI() {
    let manager = new WebServiceManager("https://bapsim.kro.kr/api/v1/notice/get/list");
    let response = await manager.start();
    console.log(response);//헤더포함한 response message
    if(response.ok)
        return response.json();
    else
        Promise.reject(response);
  }

  selectTitle=(value)=>{
     console.log(value);
     this.setState({noticeContents:this.dataFiltering(value)})
  }
  dataFiltering=(title)=>{
     let noticeContents=this.contents;
   
     noticeContents=noticeContents.filter((content)=>{
      if(content.title.toLowerCase().includes(title.toLowerCase()))
      return true;
     })
     return noticeContents;
  }
 
  render(){
  
    return (
  
      <div style={{ margin: 0 }}>
        <Box
          className="title"
          sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
        >
          공지사항 
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2 }}>
          <Grid container spacing={2}>
            <Grid item sx={{ mt: -2, ml: 1 }}>
              <input
                className="input" type="text" onChange={(e)=>this.selectTitle(e.target.value)}
                placeholder="검색어를 입력하세요"
              />
            </Grid>
            <Grid item sx={{ mt: -2, ml: -1 }}>
             
            </Grid>
          </Grid>
        </Box>
  
        {/* table box*/}
        <Box className="table">
          <Table sx={{ maxWidth: 440 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#B1D6A8" }}>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ color: "white", lineHeight: "0.5" }}
                >
                  No.
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", lineHeight: "0.5" }}
                >
                  제목
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", lineHeight: "0.5" }}
                >
                  게시일
                </TableCell>
<<<<<<< HEAD
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.noticeContents.map((item) => ( 
                        <TableRow key={item.identifier}>
                        <TableCell align="center" component="th" scope="row">
                          {item.identifier}
                        </TableCell>
                        <TableCell align="center"> <Link to={{pathname:"/NoticeDetail", state:{title:'gkdl'}}}>
                      <ListItem  style={{color:'black'}} > 
                      {item.title} 
                      </ListItem>
                    </Link></TableCell>
                        <TableCell align="center">{item.postedAt}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </Box>
      </div>
    );
  }
  
=======
                <TableCell align="center"> <Link to="/NoticeDetail">
              <ListItem button style={{color:'black'}}>
              {row.buyDate}
              </ListItem>
            </Link></TableCell>
                <TableCell align="center">{row.useDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </Box>
    </div>
  );
>>>>>>> 7c79459386649f13b0590d23e4cb0aded47b6346
}


export default Notice;