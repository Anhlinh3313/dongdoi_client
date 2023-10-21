import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import { Row, Col } from "antd";
import Script from "next/script";
import Head from "next/head";
import { htmlToText } from "html-to-text";

const PostSchema = (props) => {
  const data = props.data;
  const schema = props.schema;
  return (
    <>
      <div>
        <Head>
          <title>{data?.title} </title>
          <meta
            name="description"
            content={htmlToText(data?.description?.toString(), {
              wordwrap: 200,
            })}
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content="bong da,bongda,tiso,nhan dinh bong da,lich thi dau, bóng đá, tỉ số"
          />
          <meta
            name="description"
            content={htmlToText(data?.description?.toString(), {
              wordwrap: 200,
            })}
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 thethao789.com"
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}/${data?.slug}`}
          ></meta>
          <meta
            property="og:description"
            content={htmlToText(data?.description?.toString(), {
              wordwrap: 200,
            })}
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>

          {schema &&
            schema.map((item, index) => {
              return (
                <script
                  key={index}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: item.script,
                  }}
                ></script>
              );
            })}
        </Head>
      </div>
    </>
  );
};

export default PostSchema;
