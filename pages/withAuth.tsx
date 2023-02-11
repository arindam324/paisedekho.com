import React, { ReactElement, ComponentType } from "react";
import jwt from "jsonwebtoken";
import Router from "next/router";

import Cookies from "js-cookie";
import { NextPage, NextComponentType } from "next";

const secret = "secretkey";

const withAuth = <T extends {}>(Component: NextComponentType<T>) => {
  return class Authenticated extends React.Component<T> {
    static async getInitialProps(ctx: any) {
      const token = Cookies.get("token");

      if (token) {
        try {
          const decoded = jwt.verify(token.split("=")[1], secret);
          ctx.user = decoded;
        } catch (err) {
          if (ctx.res) {
            ctx.res.writeHead(302, {
              Location: "/login",
            });

            ctx.res.end();
          }
        }
      } else {
        // Router.push("/login");
        if (ctx.res) {
          ctx.res.writeHead(302, { Location: "/login" });
          ctx.res.end();
        }
      }

      let pageProps;
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { ...pageProps };
    }

    render() {
      return <Component {...(this.props as T)} />;
    }
  };
};

export default withAuth;
