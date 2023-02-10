import React from "react";
import jwt from "jsonwebtoken";
import Router from "next/router";

import Cookies from "js-cookie";

const secret = "secretkey";

const withAuth = (Component) => {
  return class Authenticated extends React.Component {
    static async getInitialProps(ctx) {
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

      const pageProps =
        Component.getInitialProps && (await Component.getInitialProps(ctx));

      return { ...pageProps };
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

export default withAuth;
