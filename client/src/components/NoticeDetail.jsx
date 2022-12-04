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


class  NoticeDetail extends Component {
  constructor(props) {
     

    super(props);
   
    this.state={
      
    }
}
componentDidMount(){ 
  
} 
  render(){
    {console.log(this.props)}
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
                밥심 사용 방법
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
                 No.01
                </TableCell>
                <TableCell
                align={"right"}
                  sx={{ color: "black", lineHeight: "0.5" }}
                >
                 게시일 : 2022.09.26
                </TableCell>
              </TableRow>
            <TableBody>
                  <Box
                      sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
                  >
                   

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