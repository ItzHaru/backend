/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import entityRelationshipChart from "strapi-plugin-entity-relationship-chart/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "entity-relationship-chart": entityRelationshipChart,
  },
});
