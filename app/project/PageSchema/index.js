import React, { useEffect, useState } from "react";
import Head from "next/head";
import { API_URL } from "../../@function/wsCode";
const PageSchema = (props) => {
  const [schema, setSchema] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/schema/getByPage/${props.slug}`)
      .then((res) => res.json())
      .then((data) => setSchema(data));
  }, []);

  // const organizationSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: process.env.NEXT_PUBLIC_SCHEMA_NAME,
  //   url: process.env.NEXT_PUBLIC_SCHEMA_URL,
  //   logo: process.env.NEXT_PUBLIC_SCHEMA_LOGO,
  //   alternateName: process.env.NEXT_PUBLIC_SCHEMA_NAME,
  // };
  // const keywordList = props.keyword;
  // const description = props.description;
  // const slug = props.slug;
  // const webpageSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "WebPage",
  //   name: process.env.NEXT_PUBLIC_SCHEMA_NAME,
  //   url: process.env.NEXT_PUBLIC_SCHEMA_URL,
  //   logo: process.env.NEXT_PUBLIC_SCHEMA_LOGO,
  //   description: props.description,
  //   keywords: keywordList,
  // };
  // const schemaData = {
  //   "@context": "https://schema.org/",
  //   "@type": "BreadcrumbList",
  //   itemListElement: [
  //     {
  //       "@type": "ListItem",
  //       position: 1,
  //       name: process.env.NEXT_PUBLIC_SCHEMA_NAME,
  //       item: process.env.NEXT_PUBLIC_SCHEMA_URL,
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 2,
  //       name: process.env.NEXT_PUBLIC_SCHEMA_NAME,
  //       item: `${process.env.NEXT_PUBLIC_SCHEMA_NAME}/` + slug,
  //     },
  //   ],
  // };

  return (
    <>
      <div>
        <Head>
          <title>{props.description}</title>
          <meta
            name="description"
            content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
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
            content="Bóng đá: cập nhật tin tức bóng đá, nhận định bóng đá, lịch thi đấu"
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 thethao789.com "
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
          <meta
            property="og:description"
            content="Bóng đá: cập nhật tin tức bóng đá, nhận định bóng đá, lịch thi đấu"
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          ></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:title" content={props.description}></meta>
          <meta property="og:site_name" content={props.description}></meta>

          {schema &&
            schema.map((item, index) => {
              return (
                <script
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

export default PageSchema;
