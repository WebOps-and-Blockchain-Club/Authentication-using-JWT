const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const iterations = require("../Utils/index").iterations;