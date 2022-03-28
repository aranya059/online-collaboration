// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

require.context("../images", true);

require("bootstrap")

require("tether/dist/js/tether.min")
require("moment/dist/moment")
require("jquery-slimscroll/jquery.slimscroll.min")
require("select2/dist/js/select2.full.min")
require("datatables.net/js/jquery.dataTables.min")
require("datatables.net-bs4/js/dataTables.bootstrap4.min")
require("datatables-responsive/js/dataTables.responsive")
require("simplebar/dist/simplebar.min")
require("ladda/js/ladda.js")
require("../src/sleek_bundle")
require("string-similarity")
require("trix")
require("@rails/actiontext")

import "../stylesheets/application.scss";

Rails.start();
ActiveStorage.start();
require("../src/global-functions")
require("../src/global-configure")
require("../src/datatable-configure")
require("../src/registrations")
require("../src/companies")
require("../src/users")
