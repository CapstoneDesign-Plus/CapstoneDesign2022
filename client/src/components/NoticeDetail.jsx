import { Component } from "react";
import { Link} from "react-router-dom";
import {
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  ListItem
} from "@mui/material";
import WebServiceManager from "../util/webservice_manager";
import { gridColumnGroupsLookupSelector } from "@mui/x-data-grid";

class  NoticeDetail extends Component {
  constructor(props) {
    
    super(props);
  
    this.state={
      detailContents:[]
    }
}

  componentDidMount(){
    this.callGetAPI().then((response) => {
     
      this.setState({detailContents:response.result});
      
  })
  }
  async callGetAPI() {
    let manager = new WebServiceManager("https://bapsim.kro.kr/api/v1/notice/get/1"); // 수정필요
    let response = await manager.start();
    console.log(response);//헤더포함한 response message
    if(response.ok)
        return response.json();
    else
        Promise.reject(response);
  }

  render(){
    
  
    return (
      <div style={{ margin: 0 }}>
        <Box
          className="title"
          sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
        >
         게시글 확인
        </Box>
       
  
        {/* table box*/}
        <Box className="table">
          <Table sx={{ maxWidth: 440 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#B1D6A8" }}>
              <TableRow>
              <TableCell
                align={"left"}
                  sx={{ color: "black", lineHeight: "0.5" }}
                >
                {this.state.detailContents.title}
                </TableCell>
                <TableCell
                  sx={{ color: "black", lineHeight: "0.5" }}
                >
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
                  <TableCell
                align={"left"}
                  sx={{ color: "black", lineHeight: "0.5" }}
                >
                 No.{this.state.detailContents.identifier}
                </TableCell>
                <TableCell
                align={"right"}
                  sx={{ color: "black", lineHeight: "0.5" }}
                >
                 게시일 : {this.state.detailContents.postedAt}
                </TableCell>
              </TableRow>
            <TableBody>
                  <Box
                      sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
                  >
                   
                    {this.state.detailContents.content}
                  </Box>
        
            </TableBody>
          </Table>
        </Box>
        <Box
          className="title"
          sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
        >
          <Link to="/Notice">
          <Button className="myPageBtn" variant="contained">
              목록
          </Button>
  
          </Link>
          
         
        </Box>
      </div>
    );
  }
 
}
export default NoticeDetail;