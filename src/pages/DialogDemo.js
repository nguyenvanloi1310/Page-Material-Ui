import { Grid } from "@material-ui/core";
import React from "react";
import Masonry from "react-masonry-css";
import PageItem from "../Component/PageItem";

const arrayContent = [
  {
    title: "Nguyễn Văn A",
    content:
      "[Nguyễn Đức A] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn B",
    content:
      "[Nguyễn Đức B] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn C",
    content:
      "[Nguyễn Đức C] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...[Nguyễn Đức C] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn D",
    content:
      "[Nguyễn Đức D] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn E",
    content:
      "[Nguyễn Đức E] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn F",
    content:
      "[Nguyễn Đức F] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn G",
    content:
      "[Nguyễn Đức G] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
  {
    title: "Nguyễn Văn H",
    content:
      "[Nguyễn Đức H] Khóa học Học Thiết Kế Ux/ui Cho ứng Dụng Và Website Bằng Adobe Photoshop, Muse Và XD CC 2017. Thiết kế sản phẩm, Web, Mobile App, ...",
  },
];
export default function DialogDemo() {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Grid container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {arrayContent.map((item) => (
            <PageItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </Masonry>
      </Grid>
    </>
  );
}
