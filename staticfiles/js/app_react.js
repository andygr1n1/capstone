"use strict";
(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["app_react"],{

/***/ "./frontend/src/styles/index.scss":
/*!****************************************!*\
  !*** ./frontend/src/styles/index.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1730232990663
        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ "./frontend/mst/StoreProvider.tsx":
/*!****************************************!*\
  !*** ./frontend/mst/StoreProvider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root$Provider: () => (/* binding */ Root$Provider),
/* harmony export */   root$: () => (/* binding */ root$),
/* harmony export */   useRoot$: () => (/* binding */ useRoot$)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_Root_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores/Root.store */ "./frontend/mst/stores/Root.store.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



var storeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var generateRoot$ = function () { return _stores_Root_store__WEBPACK_IMPORTED_MODULE_1__.Root$.create({
    selected_date: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()).format('DD MMMM YYYY'),
}); };
var root$ = generateRoot$();
var useRoot$ = function () {
    var store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(storeContext);
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider');
    }
    return store;
};
var Root$Provider = function (_a) {
    var children = _a.children, store = _a.store;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(storeContext.Provider, { value: store }, children);
};


/***/ }),

/***/ "./frontend/mst/models/Message.model.ts":
/*!**********************************************!*\
  !*** ./frontend/mst/models/Message.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.model */ "./frontend/mst/models/User.model.ts");


var Message = mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__.types.model('Message', {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__.types.identifierNumber,
    content: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__.types.string,
    created_at: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__.types.string,
    created_by: _User_model__WEBPACK_IMPORTED_MODULE_0__.User,
});


/***/ }),

/***/ "./frontend/mst/models/Task.model.ts":
/*!*******************************************!*\
  !*** ./frontend/mst/models/Task.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.model */ "./frontend/mst/models/User.model.ts");
/* harmony import */ var _Message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.model */ "./frontend/mst/models/Message.model.ts");



var Task = mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types
    .model('Task', {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.identifierNumber,
    title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string,
    description: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string),
    location: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string),
    deadline: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string),
    created_at: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string,
    is_author: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.boolean,
    author: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.maybeNull(_User_model__WEBPACK_IMPORTED_MODULE_0__.User),
    finished_at: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.string),
    users: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.array(_User_model__WEBPACK_IMPORTED_MODULE_0__.User),
    messages: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__.types.array(_Message_model__WEBPACK_IMPORTED_MODULE_1__.Message),
})
    .views(function (self) { return ({
    get authorInUsers() {
        return self.author && self.users.map(function (user) { return user.id; }).includes(self.author.id);
    },
}); });


/***/ }),

/***/ "./frontend/mst/models/User.model.ts":
/*!*******************************************!*\
  !*** ./frontend/mst/models/User.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");

var User = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__.types.model('User', {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__.types.number,
    username: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__.types.string,
});


/***/ }),

/***/ "./frontend/mst/stores/Root.store.ts":
/*!*******************************************!*\
  !*** ./frontend/mst/stores/Root.store.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root$: () => (/* binding */ Root$)
/* harmony export */ });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var _models_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User.model */ "./frontend/mst/models/User.model.ts");
/* harmony import */ var _models_Task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Task.model */ "./frontend/mst/models/Task.model.ts");
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/utils/api */ "./frontend/src/utils/api/index.ts");
/* harmony import */ var _src_modules_dashboard_helpers_getCalendarDataByData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/modules/dashboard/helpers/getCalendarDataByData */ "./frontend/src/modules/dashboard/helpers/getCalendarDataByData.tsx");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Root$ = mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types
    .model('Root$', {
    users: mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.array(_models_User_model__WEBPACK_IMPORTED_MODULE_0__.User),
    tasks: mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.array(_models_Task_model__WEBPACK_IMPORTED_MODULE_1__.Task),
    // tasks filters
    tasks_state: mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.enumeration('TasksState', ['all', 'active', 'completed', 'expired']), 'active'),
    tasks_current_page: -1,
    tasks_num_pages: 1,
    tasks_search_text: '',
    // dashboard specific filters
    selected_date: mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.string,
    // task dialog view/editor
    selected_task: mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.types.safeReference(_models_Task_model__WEBPACK_IMPORTED_MODULE_1__.Task),
})
    .views(function (self) { return ({
    isAllState: function () {
        return self.tasks_state === 'all';
    },
    calendarData: function (date) {
        return (0,_src_modules_dashboard_helpers_getCalendarDataByData__WEBPACK_IMPORTED_MODULE_3__.getCalendarDataByDate)(date, self.tasks);
    },
}); })
    .actions(function (self) { return ({
    onChangeField: function (key, value) {
        self[key] = value;
    },
    initSetup: function (_a) {
        var page = _a.page, searchText = _a.searchText, state = _a.state;
        self.tasks_current_page = page;
        self.tasks_search_text = searchText;
        self.tasks_state = state;
    },
}); })
    .actions(function (self) { return ({
    fetchUsersAndTasks: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _fetchUsersAndTasks() {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.fetchUsersAndTasks({
                        user_id: appUser.id,
                        page: self.tasks_current_page,
                        filter_by_text: self.tasks_search_text,
                        filter_state: 'active',
                    })];
                case 1:
                    res = _a.sent();
                    (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.applySnapshot)(self.users, res.users);
                    (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.applySnapshot)(self.tasks, res.tasks);
                    self.tasks_num_pages = res.num_pages;
                    self.tasks_current_page = res.current_page;
                    return [2 /*return*/];
            }
        });
    }),
    fetchSelectedTasks: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _fetchSelectedTasks(props) {
        var selectedState, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectedState = (props === null || props === void 0 ? void 0 : props.state) || self.tasks_state;
                    if (props === null || props === void 0 ? void 0 : props.state)
                        self.tasks_state = selectedState;
                    return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.fetchSelectedTasks({
                            page: self.tasks_current_page,
                            filter_by_text: self.tasks_search_text,
                            filter_state: selectedState,
                            user_id: appUser.id,
                        })];
                case 1:
                    res = _a.sent();
                    (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.applySnapshot)(self.tasks, res.tasks);
                    self.tasks_num_pages = res.num_pages;
                    self.tasks_current_page = res.current_page;
                    return [2 /*return*/];
            }
        });
    }),
    editTask: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _editTask(_a) {
        var formData = _a.formData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.editTask({ formData: formData, tasks_current_page: self.tasks_current_page })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }),
    deleteTask: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _deleteTask() {
        var task_id;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    task_id = (_a = self.selected_task) === null || _a === void 0 ? void 0 : _a.id;
                    if (!task_id)
                        return [2 /*return*/];
                    return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.deleteTask({ task_id: task_id })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }),
    toggleCompleteTask: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _toggleCompleteTask(_a) {
        var taskId = _a.taskId;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!self.isAllState()) {
                        (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.applySnapshot)(self.tasks, self.tasks.filter(function (task) { return task.id !== taskId; }));
                    }
                    return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.toggleCompleteTask({ taskId: taskId })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }),
    sendMessage: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _sendMessage(_a) {
        var task_id;
        var _b;
        var new_message = _a.new_message;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    task_id = (_b = self.selected_task) === null || _b === void 0 ? void 0 : _b.id;
                    if (!task_id)
                        return [2 /*return*/];
                    return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.sendMessage({ new_message: new_message, task_id: task_id })];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }),
    refreshMessenger: (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.flow)(function _refreshMessenger() {
        var task_id, resTask, selectedTask;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    task_id = (_a = self.selected_task) === null || _a === void 0 ? void 0 : _a.id;
                    if (!task_id)
                        return [2 /*return*/];
                    return [4 /*yield*/, _src_utils_api__WEBPACK_IMPORTED_MODULE_2__.api.fetchTaskById({ task_id: task_id })];
                case 1:
                    resTask = _b.sent();
                    selectedTask = self.tasks.find(function (task) { return task.id === task_id; });
                    if (selectedTask) {
                        (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__.applySnapshot)(selectedTask, resTask);
                    }
                    return [2 /*return*/];
            }
        });
    }),
}); });


/***/ }),

/***/ "./frontend/src/application/app_react.tsx":
/*!************************************************!*\
  !*** ./frontend/src/application/app_react.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboardRootElement: () => (/* binding */ dashboardRootElement),
/* harmony export */   renderDashboardRoot: () => (/* binding */ renderDashboardRoot),
/* harmony export */   renderTasksRoot: () => (/* binding */ renderTasksRoot),
/* harmony export */   tasksRootElement: () => (/* binding */ tasksRootElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Topbar */ "./frontend/src/components/Topbar.tsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./frontend/src/styles/index.scss");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./frontend/src/components/Footer.tsx");
/* harmony import */ var _components_AnonymousLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AnonymousLogin */ "./frontend/src/components/AnonymousLogin.tsx");
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Register */ "./frontend/src/components/Register.tsx");
/* harmony import */ var _modules_dashboard_DashboardIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/dashboard/DashboardIndex */ "./frontend/src/modules/dashboard/DashboardIndex.tsx");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Login */ "./frontend/src/components/Login.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _modules_tasks_TasksIndex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/tasks/TasksIndex */ "./frontend/src/modules/tasks/TasksIndex.tsx");











var root = document.getElementById('root');
if (root) {
    var rootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(root);
    rootElement.render(null);
}
var topbarRoot = document.getElementById('topbar');
if (topbarRoot) {
    var topbarRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(topbarRoot);
    topbarRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Topbar__WEBPACK_IMPORTED_MODULE_2__.Topbar, null)));
}
var footerRoot = document.getElementById('footer');
if (footerRoot) {
    var footerRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(footerRoot);
    footerRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, null));
}
var anonymousLoginRoot = document.getElementById('anonymous-login');
if (anonymousLoginRoot) {
    var anonymousLoginRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(anonymousLoginRoot);
    anonymousLoginRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AnonymousLogin__WEBPACK_IMPORTED_MODULE_5__.AnonymousLogin, null));
}
var authenticatedLoginRoot = document.getElementById('authenticated-login');
var dashboardRootElement = authenticatedLoginRoot ? (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(authenticatedLoginRoot) : null;
var renderDashboardRoot = function () {
    dashboardRootElement === null || dashboardRootElement === void 0 ? void 0 : dashboardRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_dashboard_DashboardIndex__WEBPACK_IMPORTED_MODULE_7__.DashboardIndex, null));
};
renderDashboardRoot();
var registerRoot = document.getElementById('register');
if (registerRoot) {
    var registerRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(registerRoot);
    registerRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Register__WEBPACK_IMPORTED_MODULE_6__.Register, null));
}
var loginRoot = document.getElementById('login');
if (loginRoot) {
    var loginRootElement = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(loginRoot);
    loginRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Login__WEBPACK_IMPORTED_MODULE_8__.Login, null));
}
/*  */
var tasksRoot = document.getElementById('tasks');
var tasksRootElement = tasksRoot ? (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(tasksRoot) : null;
var renderTasksRoot = function () {
    tasksRootElement === null || tasksRootElement === void 0 ? void 0 : tasksRootElement.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_tasks_TasksIndex__WEBPACK_IMPORTED_MODULE_9__.TasksIndex, null));
};
renderTasksRoot();


/***/ }),

/***/ "./frontend/src/components/AnonymousLogin.tsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/AnonymousLogin.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousLogin: () => (/* binding */ AnonymousLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_CM_IMG_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/CM-IMG.png */ "./frontend/src/assets/images/CM-IMG.png");


var AnonymousLogin = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _assets_images_CM_IMG_png__WEBPACK_IMPORTED_MODULE_1__, height: 200, width: 200, alt: "Crystal Mind Logo", className: "animate-bounce-slow select-none pointer-events-none" })));
};


/***/ }),

/***/ "./frontend/src/components/Clock.tsx":
/*!*******************************************!*\
  !*** ./frontend/src/components/Clock.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Clock: () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Clock = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date()), time = _a[0], setTime = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = setInterval(function () {
            setTime(new Date());
        }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm text-gray-500" }, time.toLocaleTimeString());
};


/***/ }),

/***/ "./frontend/src/components/Footer.tsx":
/*!********************************************!*\
  !*** ./frontend/src/components/Footer.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clock */ "./frontend/src/components/Clock.tsx");


var Footer = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between w-full h-full items-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Clock__WEBPACK_IMPORTED_MODULE_1__.Clock, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm w-fit h-full text-gray-500" }, "by andygr1n1 for Harvard university")));
};


/***/ }),

/***/ "./frontend/src/components/LogOutButton.tsx":
/*!**************************************************!*\
  !*** ./frontend/src/components/LogOutButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogOutButton: () => (/* binding */ LogOutButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useContainerWidth */ "./frontend/src/hooks/useContainerWidth.ts");



var LogOutButton = function () {
    var isLgView = (0,_hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_1__.useWindowWidth)().isLgView;
    var onClick = function () {
        fetch('/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
            },
        }).then(function (response) {
            if (response.ok) {
                window.location.href = '/';
            }
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { className: 'w-full lg:w-auto animate-opacity-in', size: isLgView ? 'middle' : 'large', shape: isLgView ? 'round' : undefined, color: "danger", variant: "dashed", onClick: onClick }, "Log out"));
};


/***/ }),

/***/ "./frontend/src/components/Login.tsx":
/*!*******************************************!*\
  !*** ./frontend/src/components/Login.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login: () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");


var Title = antd__WEBPACK_IMPORTED_MODULE_1__["default"].Title;
var Login = function () {
    var onFinish = function (values) {
        fetch('/login/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
            },
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Network response was not ok');
            }
        })
            .then(function (data) {
            if (data.status === 'success') {
                window.location.href = '/';
            }
            else {
                var errorMessage = data.message;
                antd__WEBPACK_IMPORTED_MODULE_2__["default"].error(errorMessage);
                console.error('Error:', data);
            }
        })
            .catch(function (error) {
            var errorMessage = error;
            antd__WEBPACK_IMPORTED_MODULE_2__["default"].error(errorMessage);
            console.error('Error:', error);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center w-full items-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:bg-white p-10 lg:rounded-md lg:shadow-md w-full max-w-md" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, { className: "font-kaushan text-center" }, "Login"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "login", onFinish: onFinish },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "username", rules: [{ required: true, message: 'Please input your Username!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", placeholder: "Username", autoComplete: "username" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "password", rules: [{ required: true, message: 'Please input your Password!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", type: "password", placeholder: "Password", autoComplete: "password" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { size: "large", type: "primary", htmlType: "submit", className: "w-full" }, "Login"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "text", href: "/register" }, "Don't have an account? Register")))));
};


/***/ }),

/***/ "./frontend/src/components/MobileMenu.tsx":
/*!************************************************!*\
  !*** ./frontend/src/components/MobileMenu.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileMenu: () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/MenuOutlined.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogOutButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogOutButton */ "./frontend/src/components/LogOutButton.tsx");
/* harmony import */ var _hooks_useCurrentLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCurrentLocation */ "./frontend/src/hooks/useCurrentLocation.ts");





var MobileMenu = function () {
    var selectedLocation = (0,_hooks_useCurrentLocation__WEBPACK_IMPORTED_MODULE_2__.useCurrentLocation)().selectedLocation;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), open = _a[0], setOpen = _a[1];
    var toggleDrawer = function () {
        setOpen(function (val) { return !val; });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex lg:hidden" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "text-2xl cursor-pointer", onClick: toggleDrawer }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Crystal Mind", placement: "bottom", width: 500, onClose: toggleDrawer, open: open },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex flex-col gap-4" }, isAuthenticated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "w-full", size: "large", type: selectedLocation(''), href: "/" }, "Dashboard")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "w-full", size: "large", type: selectedLocation('tasks'), href: "/tasks" }, "Tasks")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LogOutButton__WEBPACK_IMPORTED_MODULE_1__.LogOutButton, null)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "w-full", size: "large", type: "dashed", href: "/register" }, "Join now")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "w-full", size: "large", type: "dashed", href: "/login" }, "Login"))))))));
};


/***/ }),

/***/ "./frontend/src/components/Register.tsx":
/*!**********************************************!*\
  !*** ./frontend/src/components/Register.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register: () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");


var Title = antd__WEBPACK_IMPORTED_MODULE_1__["default"].Title;
var Register = function () {
    var onFinish = function (values) {
        fetch('/register/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
            },
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Network response was not ok');
            }
        })
            .then(function (data) {
            if (data.status === 'success') {
                window.location.href = '/';
            }
            else {
                var errorMessage = data.message;
                antd__WEBPACK_IMPORTED_MODULE_2__["default"].error(errorMessage);
                console.error('Error:', data);
            }
        })
            .catch(function (error) {
            var errorMessage = error;
            antd__WEBPACK_IMPORTED_MODULE_2__["default"].error(errorMessage);
            console.error('Error:', error);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center w-full items-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:bg-white p-10 lg:rounded-md lg:shadow-md w-full max-w-md" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, { className: "font-kaushan text-center" }, "Register"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "register", onFinish: onFinish },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "username", rules: [{ required: true, message: 'Please input your Username!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", placeholder: "Username", autoComplete: "username" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "email", rules: [
                        { required: true, message: 'Please input your Email!' },
                        { type: 'email', message: 'The input is not valid E-mail!' },
                    ] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", type: "email", placeholder: "Email Address", autoComplete: "email" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "password", rules: [{ required: true, message: 'Please input your Password!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Password, { size: "large", placeholder: "Password", autoComplete: "new-password" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "confirmation", dependencies: ['password'], hasFeedback: true, rules: [
                        { required: true, message: 'Please confirm your Password!' },
                        function (_a) {
                            var getFieldValue = _a.getFieldValue;
                            return ({
                                validator: function (_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            });
                        },
                    ] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Password, { size: "large", placeholder: "Confirm Password", autoComplete: "new-password" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { size: "large", type: "primary", htmlType: "submit", className: "w-full" }, "Register"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "text", href: "/login" }, "Already have an account? Login")))));
};


/***/ }),

/***/ "./frontend/src/components/Topbar.tsx":
/*!********************************************!*\
  !*** ./frontend/src/components/Topbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Topbar: () => (/* binding */ Topbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _LogOutButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogOutButton */ "./frontend/src/components/LogOutButton.tsx");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMenu */ "./frontend/src/components/MobileMenu.tsx");
/* harmony import */ var _hooks_useCurrentLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCurrentLocation */ "./frontend/src/hooks/useCurrentLocation.ts");





var Topbar = function () {
    var selectedLocation = (0,_hooks_useCurrentLocation__WEBPACK_IMPORTED_MODULE_3__.useCurrentLocation)().selectedLocation;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between md:flex-row gap-10 md:gap-0 p-5" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "min-w-fit" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-4xl lg:text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" }, "Crystal Mind")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gap-2 w-full justify-between items-center hidden lg:flex" }, !isAuthenticated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full justify-end gap-4 items-center px-5" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { shape: "round", type: "dashed", href: "/register" }, "Join now"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { shape: "round", type: "dashed", href: "/login" }, "Login"))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-4 items-center px-5" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { shape: "round", type: selectedLocation(''), href: "/" }, "Dashboard"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { shape: "round", type: selectedLocation('tasks'), href: "/tasks" }, "Tasks"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm text-gray-500" },
                        "connected as ", appUser === null || appUser === void 0 ? void 0 :
                        appUser.username)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LogOutButton__WEBPACK_IMPORTED_MODULE_1__.LogOutButton, null)))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileMenu__WEBPACK_IMPORTED_MODULE_2__.MobileMenu, null))));
};


/***/ }),

/***/ "./frontend/src/hooks/useContainerWidth.ts":
/*!*************************************************!*\
  !*** ./frontend/src/hooks/useContainerWidth.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContainerWidth: () => (/* binding */ useContainerWidth),
/* harmony export */   useWindowWidth: () => (/* binding */ useWindowWidth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useContainerWidth(elementRef) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined), containerWidth = _a[0], setContainerWidth = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var handleResize = function () { var _a; return setContainerWidth(((_a = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) || window.innerWidth); };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [window.innerWidth]);
    return containerWidth;
}
var useWindowWidth = function () {
    var currentWidth = useContainerWidth() || 0;
    return {
        isMdView: currentWidth > 768,
        isLgView: currentWidth > 1024,
        isXlView: currentWidth > 1280,
    };
};


/***/ }),

/***/ "./frontend/src/hooks/useCurrentLocation.ts":
/*!**************************************************!*\
  !*** ./frontend/src/hooks/useCurrentLocation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentLocation: () => (/* binding */ useCurrentLocation)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");

var useCurrentLocation = function () {
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
    var selectedLocation = function (value) {
        var isSelectedLocation = location.pathname.replaceAll('/', '') === value;
        if (isSelectedLocation) {
            return 'primary';
        }
        return 'default';
    };
    return { selectedLocation: selectedLocation };
};


/***/ }),

/***/ "./frontend/src/hooks/useInitModule.ts":
/*!*********************************************!*\
  !*** ./frontend/src/hooks/useInitModule.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInitModule: () => (/* binding */ useInitModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");


var useInitModule = function (_a) {
    var page = _a.page, searchText = _a.searchText, state = _a.state;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.root$.initSetup({ page: page, searchText: searchText, state: state });
        _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.root$.fetchUsersAndTasks();
        var socket = new WebSocket("ws://".concat(window.location.host, "/ws/tasks/"));
        socket.onmessage = function (event) {
            var data = JSON.parse(event.data);
            var relatedUsers = JSON.parse(data.related_users);
            var userInRelatedUsers = relatedUsers.includes(appUser.id);
            if (data.type === 'tasks_refresh' && userInRelatedUsers) {
                _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.root$.fetchSelectedTasks();
            }
        };
        return function () {
            socket.close();
        };
    }, []);
};


/***/ }),

/***/ "./frontend/src/modules/dashboard/CalendarIndex.tsx":
/*!**********************************************************!*\
  !*** ./frontend/src/modules/dashboard/CalendarIndex.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarIndex: () => (/* binding */ CalendarIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/calendar/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useContainerWidth */ "./frontend/src/hooks/useContainerWidth.ts");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _CellRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CellRender */ "./frontend/src/modules/dashboard/CellRender.tsx");







var CalendarIndex = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(function () {
    var isLgView = (0,_hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__.useWindowWidth)().isLgView;
    var onChangeField = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__.useRoot$)().onChangeField;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()); }), value = _a[0], setValue = _a[1];
    var onSelect = function (newValue) {
        setValue(newValue);
        onChangeField('selected_date', newValue.format('DD MMMM YYYY'));
    };
    var onPanelChange = function (newValue) {
        setValue(newValue);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full p-5 bg-white rounded-lg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { cellRender: isLgView ? function (value) { return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CellRender__WEBPACK_IMPORTED_MODULE_5__.CellRender, { value: value.format('DD MMMM YYYY') }); } : undefined, fullscreen: isLgView, value: value, onSelect: onSelect, onPanelChange: onPanelChange })));
});


/***/ }),

/***/ "./frontend/src/modules/dashboard/CellRender.tsx":
/*!*******************************************************!*\
  !*** ./frontend/src/modules/dashboard/CellRender.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellRender: () => (/* binding */ CellRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/badge/index.js");




var CellRender = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(function (_a) {
    var value = _a.value;
    var calendarData = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__.useRoot$)().calendarData;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.Observer, null, function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "events" }, calendarData(value).map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: item.id },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { status: item.is_author ? 'success' : 'default', text: item.title }))); }))); }));
});


/***/ }),

/***/ "./frontend/src/modules/dashboard/CurrentTasksAlert.tsx":
/*!**************************************************************!*\
  !*** ./frontend/src/modules/dashboard/CurrentTasksAlert.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentTasksAlert: () => (/* binding */ CurrentTasksAlert)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/alert/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useContainerWidth */ "./frontend/src/hooks/useContainerWidth.ts");
/* harmony import */ var _tasks_components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/components/Task */ "./frontend/src/modules/tasks/components/Task.tsx");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");







var CurrentTasksAlert = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)(function () {
    var _a;
    var isLgView = (0,_hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__.useWindowWidth)().isLgView;
    var _b = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__.useRoot$)(), selected_date = _b.selected_date, calendarData = _b.calendarData;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        isLgView && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { message: "Tasks on ".concat(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(selected_date).format('DD MMMM YYYY')) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col gap-4 my-4" }, (_a = calendarData(selected_date)) === null || _a === void 0 ? void 0 : _a.map(function (task) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tasks_components_Task__WEBPACK_IMPORTED_MODULE_3__.Task, { key: task.id, task: task })); }))));
});


/***/ }),

/***/ "./frontend/src/modules/dashboard/Dashboard.tsx":
/*!******************************************************!*\
  !*** ./frontend/src/modules/dashboard/Dashboard.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useContainerWidth */ "./frontend/src/hooks/useContainerWidth.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var _CalendarIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CalendarIndex */ "./frontend/src/modules/dashboard/CalendarIndex.tsx");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/cn */ "./frontend/src/utils/cn.ts");
/* harmony import */ var _CurrentTasksAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CurrentTasksAlert */ "./frontend/src/modules/dashboard/CurrentTasksAlert.tsx");
/* harmony import */ var _tasks_components_SelectedTaskDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tasks/components/SelectedTaskDialog */ "./frontend/src/modules/tasks/components/SelectedTaskDialog.tsx");










var Dashboard = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(function () {
    var isLgView = (0,_hooks_useContainerWidth__WEBPACK_IMPORTED_MODULE_2__.useWindowWidth)().isLgView;
    var selected_date = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__.useRoot$)().selected_date;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-5 p-10 flex-col w-full lg:flex-row" },
        !isLgView ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], { size: "large", className: "w-full", items: [
                {
                    key: '1',
                    label: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(selected_date).format('DD MMMM YYYY'),
                    children: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full max-w-4xl p-5 bg-white rounded-lg" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalendarIndex__WEBPACK_IMPORTED_MODULE_5__.CalendarIndex, null))),
                },
            ] })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalendarIndex__WEBPACK_IMPORTED_MODULE_5__.CalendarIndex, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__.cn)('w-full', isLgView && 'max-w-md max-h-[830px] overflow-x-hidden overflow-y-auto') },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CurrentTasksAlert__WEBPACK_IMPORTED_MODULE_7__.CurrentTasksAlert, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tasks_components_SelectedTaskDialog__WEBPACK_IMPORTED_MODULE_8__.SelectedTaskDialog, { readonly: true })));
});


/***/ }),

/***/ "./frontend/src/modules/dashboard/DashboardIndex.tsx":
/*!***********************************************************!*\
  !*** ./frontend/src/modules/dashboard/DashboardIndex.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardIndex: () => (/* binding */ DashboardIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard */ "./frontend/src/modules/dashboard/Dashboard.tsx");
/* harmony import */ var _hooks_useInitModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInitModule */ "./frontend/src/hooks/useInitModule.ts");




var DashboardIndex = function () {
    (0,_hooks_useInitModule__WEBPACK_IMPORTED_MODULE_3__.useInitModule)({ page: -1, searchText: '', state: 'active' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.Root$Provider, { store: _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.root$ },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_2__.Dashboard, null)));
};


/***/ }),

/***/ "./frontend/src/modules/dashboard/helpers/getCalendarDataByData.tsx":
/*!**************************************************************************!*\
  !*** ./frontend/src/modules/dashboard/helpers/getCalendarDataByData.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCalendarDataByDate: () => (/* binding */ getCalendarDataByDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

var getCalendarDataByDate = function (date, tasks) {
    return tasks.filter(function (task) {
        var taskStartDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(task.created_at);
        var taskDeadline = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(task.deadline).endOf('day');
        var currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).endOf('day');
        return (currentDate.isSame(taskStartDate, 'day') ||
            currentDate.isSame(taskDeadline, 'day') ||
            (currentDate.isAfter(taskStartDate, 'day') && currentDate.isBefore(taskDeadline, 'day')));
    });
};


/***/ }),

/***/ "./frontend/src/modules/tasks/Tasks.tsx":
/*!**********************************************!*\
  !*** ./frontend/src/modules/tasks/Tasks.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tasks: () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreateNewTask */ "./frontend/src/modules/tasks/components/CreateNewTask.tsx");
/* harmony import */ var _components_FilteredTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FilteredTasks */ "./frontend/src/modules/tasks/components/FilteredTasks.tsx");
/* harmony import */ var _components_TasksPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TasksPagination */ "./frontend/src/modules/tasks/components/TasksPagination.tsx");
/* harmony import */ var _components_tasks_filters_TasksFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks-filters/TasksFilters */ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilters.tsx");
/* harmony import */ var _components_SelectedTaskDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SelectedTaskDialog */ "./frontend/src/modules/tasks/components/SelectedTaskDialog.tsx");






var Tasks = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full gap-5 flex-col max-w-lg m-auto h-full my-10 px-5 md:px-0" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tasks_filters_TasksFilters__WEBPACK_IMPORTED_MODULE_4__.TasksFilters, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CreateNewTask__WEBPACK_IMPORTED_MODULE_1__.CreateNewTask, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FilteredTasks__WEBPACK_IMPORTED_MODULE_2__.FilteredTasks, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TasksPagination__WEBPACK_IMPORTED_MODULE_3__.TasksPagination, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SelectedTaskDialog__WEBPACK_IMPORTED_MODULE_5__.SelectedTaskDialog, null)));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/TasksIndex.tsx":
/*!***************************************************!*\
  !*** ./frontend/src/modules/tasks/TasksIndex.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksIndex: () => (/* binding */ TasksIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks */ "./frontend/src/modules/tasks/Tasks.tsx");
/* harmony import */ var _hooks_useInitModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInitModule */ "./frontend/src/hooks/useInitModule.ts");




var TasksIndex = function () {
    (0,_hooks_useInitModule__WEBPACK_IMPORTED_MODULE_3__.useInitModule)({ page: 1, searchText: '', state: 'active' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.Root$Provider, { store: _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.root$ },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tasks__WEBPACK_IMPORTED_MODULE_2__.Tasks, null)));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/components/CreateNewTask.tsx":
/*!*****************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/CreateNewTask.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateNewTask: () => (/* binding */ CreateNewTask)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/date-picker/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Option = antd__WEBPACK_IMPORTED_MODULE_2__["default"].Option;
var CreateNewTask = function () {
    var _a = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.useRoot$)(), users = _a.users, tasks_current_page = _a.tasks_current_page;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var form = antd__WEBPACK_IMPORTED_MODULE_3__["default"].useForm()[0];
    var showModal = function () {
        setIsModalOpen(true);
    };
    var handleOk = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setIsLoading(true);
            form.validateFields()
                .then(function (values) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch('/createTask', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-CSRFToken': appCsrftoken,
                                },
                                body: JSON.stringify(__assign(__assign({}, values), { current_page: tasks_current_page })),
                            })];
                        case 1:
                            res = _a.sent();
                            if (res.ok) {
                                setIsModalOpen(false);
                                form.resetFields();
                            }
                            else {
                                console.error('Failed to create task:', res.statusText);
                            }
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (info) {
                console.error('Validate Failed:', info);
            })
                .finally(function () {
                setIsLoading(false);
            });
            return [2 /*return*/];
        });
    }); };
    var handleCancel = function () {
        setIsModalOpen(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "w-full", size: "large", type: "primary", onClick: showModal }, "New task"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { loading: isLoading, title: "Create new task", open: isModalOpen, onOk: handleOk, onCancel: handleCancel },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { form: form, layout: "vertical", name: "create_task" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "title", label: "Title", rules: [{ required: true, message: 'Please input the title of the task!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "description", label: "Description", rules: [{ required: true, message: 'Please input the description of the task!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].TextArea, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "deadline", label: "Deadline", rules: [{ required: true, message: 'Please select the deadline!' }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { showTime: true })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "location", label: "Location" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Item, { name: "users", label: "Assign to Users" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { mode: "multiple", allowClear: true, style: { width: '100%' }, placeholder: "Select users" }, users.map(function (user) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { key: user.id, value: user.id }, user.username)); })))))));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/components/FilteredTasks.tsx":
/*!*****************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/FilteredTasks.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredTasks: () => (/* binding */ FilteredTasks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./frontend/src/modules/tasks/components/Task.tsx");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");




var FilteredTasks = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(function () {
    var tasks = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__.useRoot$)().tasks;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col gap-5" }, tasks.map(function (task) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task__WEBPACK_IMPORTED_MODULE_1__.Task, { key: task.id, task: task })); })));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/SelectedTaskDialog.tsx":
/*!**********************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/SelectedTaskDialog.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedTaskDialog: () => (/* binding */ SelectedTaskDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var _SelectedTaskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectedTaskView */ "./frontend/src/modules/tasks/components/SelectedTaskView.tsx");
/* harmony import */ var _SelectedTaskEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectedTaskEditor */ "./frontend/src/modules/tasks/components/SelectedTaskEditor.tsx");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");






var SelectedTaskDialog = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(function (_a) {
    var _b = _a.readonly, readonly = _b === void 0 ? false : _b;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), editMode = _c[0], setEditMode = _c[1];
    var _d = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__.useRoot$)(), selected_task = _d.selected_task, onChangeField = _d.onChangeField;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { destroyOnClose: true, open: !!selected_task, title: selected_task === null || selected_task === void 0 ? void 0 : selected_task.title, onCancel: function () {
            setEditMode(false);
            onChangeField('selected_task', undefined);
        }, footer: null }, !editMode ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectedTaskView__WEBPACK_IMPORTED_MODULE_1__.SelectedTaskView, { toggleEditMode: function () { return setEditMode(!editMode); }, readonly: readonly })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectedTaskEditor__WEBPACK_IMPORTED_MODULE_2__.SelectedTaskEditor, { toggleEditMode: function () { return setEditMode(function (prev) { return !prev; }); } }))));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/SelectedTaskEditor.tsx":
/*!**********************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/SelectedTaskEditor.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedTaskEditor: () => (/* binding */ SelectedTaskEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/date-picker/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default()));
var Option = antd__WEBPACK_IMPORTED_MODULE_4__["default"].Option;
var SelectedTaskEditor = function (_a) {
    var toggleEditMode = _a.toggleEditMode;
    var _b = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_3__.useRoot$)(), selected_task = _b.selected_task, users = _b.users, editTask = _b.editTask;
    var form = antd__WEBPACK_IMPORTED_MODULE_5__["default"].useForm()[0];
    var handleOk = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            form.validateFields()
                .then(function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, editTask({ formData: __assign(__assign({}, values), { id: selected_task === null || selected_task === void 0 ? void 0 : selected_task.id }) })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); })
                .then(function () {
                form.resetFields();
                toggleEditMode();
            });
            return [2 /*return*/];
        });
    }); };
    if (!selected_task)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { form: form, layout: "vertical", name: "edit_task", onFinish: handleOk, initialValues: __assign(__assign({}, selected_task), { deadline: selected_task.deadline ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(selected_task.deadline) : null, users: selected_task.users.map(function (user) { return user.id; }) }) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { name: "title", label: "Title", rules: [{ required: true, message: 'Please input the title of the task!' }] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { name: "description", label: "Description", rules: [{ required: true, message: 'Please input the description of the task!' }] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"].TextArea, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { name: "deadline", label: "Deadline", rules: [{ required: true, message: 'Please select the deadline!' }] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { showTime: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { name: "location", label: "Location" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Item, { name: "users", label: "Assign to Users" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { mode: "multiple", allowClear: true, style: { width: '100%' }, placeholder: "Select users" }, users.map(function (user) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Option, { key: user.id, value: user.id }, user.username)); }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'flex gap-2 mt-5 justify-end' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: toggleEditMode }, "Cancel"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "primary", htmlType: "submit" }, "Save")))));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/components/SelectedTaskView.tsx":
/*!********************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/SelectedTaskView.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedTaskView: () => (/* binding */ SelectedTaskView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tag/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cn */ "./frontend/src/utils/cn.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task_messenger_TaskMessenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-messenger/TaskMessenger */ "./frontend/src/modules/tasks/components/task-messenger/TaskMessenger.tsx");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");






var Text = antd__WEBPACK_IMPORTED_MODULE_5__["default"].Text;
var SelectedTaskView = function (_a) {
    var _b, _c;
    var toggleEditMode = _a.toggleEditMode, _d = _a.readonly, readonly = _d === void 0 ? false : _d;
    var _e = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__.useRoot$)(), selected_task = _e.selected_task, onChangeField = _e.onChangeField, deleteTask = _e.deleteTask;
    if (!selected_task)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, selected_task === null || selected_task === void 0 ? void 0 : selected_task.description),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        (selected_task === null || selected_task === void 0 ? void 0 : selected_task.location) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { strong: true }, "Location: "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "red" }, selected_task === null || selected_task === void 0 ? void 0 : selected_task.location)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { style: { margin: '4px 0' } }),
        !!((_b = selected_task === null || selected_task === void 0 ? void 0 : selected_task.users) === null || _b === void 0 ? void 0 : _b.length) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { strong: true }, "Related Users: "),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-wrap gap-2 my-2" },
                    selected_task.users.map(function (user) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { color: user.id === (appUser === null || appUser === void 0 ? void 0 : appUser.id) ? 'gold' : 'blue', key: user.id }, user.username)); }),
                    !selected_task.authorInUsers && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_7__["default"], { color: "gold" }, (_c = selected_task.author) === null || _c === void 0 ? void 0 : _c.username))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { style: { margin: '4px 0' } }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, "Created at "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(selected_task.created_at).format('DD MMM YYYY HH:mm'))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, "Deadline at "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(selected_task.deadline).format('DD MMM YYYY HH:mm'))),
        selected_task.finished_at && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, "Finished at "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(selected_task.finished_at).format('DD MMM YYYY HH:mm')))),
        selected_task && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_task_messenger_TaskMessenger__WEBPACK_IMPORTED_MODULE_3__.TaskMessenger, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)('flex gap-2 mt-5', selected_task.is_author ? ' justify-between' : 'justify-end') },
            selected_task.is_author && !readonly && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "primary", color: "danger", variant: "dashed", onClick: function () {
                    antd__WEBPACK_IMPORTED_MODULE_9__["default"].confirm({
                        onOk: deleteTask,
                        title: 'Confirm',
                        content: 'Are you sure you want to delete this task?',
                        footer: function (_, _a) {
                            var OkBtn = _a.OkBtn, CancelBtn = _a.CancelBtn;
                            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CancelBtn, null),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OkBtn, null)));
                        },
                    });
                } }, "Delete")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-2 w-full justify-end" },
                selected_task.is_author && !readonly && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: toggleEditMode }, "Edit"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: function () { return onChangeField('selected_task', undefined); } }, "Close")))));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/components/Task.tsx":
/*!********************************************************!*\
  !*** ./frontend/src/modules/tasks/components/Task.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var _ToggleCompleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleCompleteTask */ "./frontend/src/modules/tasks/components/ToggleCompleteTask.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");







var Text = antd__WEBPACK_IMPORTED_MODULE_5__["default"].Text;
var Task = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(function (_a) {
    var task = _a.task;
    var onChangeField = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_4__.useRoot$)().onChangeField;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { title: task.title, className: "task-card hover:cursor-pointer hover:scale-105 transition-all duration-300", onClick: function (e) {
            if (e.target.closest('.ant-checkbox-wrapper')) {
                return;
            }
            onChangeField('selected_task', (0,mobx_state_tree__WEBPACK_IMPORTED_MODULE_7__.castToSnapshot)(task.id));
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full justify-between" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col sm:flex-row gap-1" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, "Created:"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(task.created_at).format('DD MMM YYYY HH:mm'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col sm:flex-row gap-1" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, "Deadline:"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, { className: "text-xs" }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(task.deadline).format('DD MMM YYYY HH:mm')))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-5" }, task.description),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        task.is_author && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToggleCompleteTask__WEBPACK_IMPORTED_MODULE_1__.ToggleCompleteTask, { task: task })));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/TasksPagination.tsx":
/*!*******************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/TasksPagination.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksPagination: () => (/* binding */ TasksPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/pagination/index.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TasksPagination = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(function () {
    var _a = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__.useRoot$)(), tasks_num_pages = _a.tasks_num_pages, onChangeField = _a.onChangeField, fetchSelectedTasks = _a.fetchSelectedTasks, tasks = _a.tasks;
    var onPageChange = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onChangeField('tasks_current_page', page);
            fetchSelectedTasks();
            return [2 /*return*/];
        });
    }); };
    if (!tasks.length)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { align: "center", pageSize: 5, defaultCurrent: 1, total: tasks_num_pages * 5, onChange: onPageChange, pageSizeOptions: [5] }));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/ToggleCompleteTask.tsx":
/*!**********************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/ToggleCompleteTask.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleCompleteTask: () => (/* binding */ ToggleCompleteTask)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/checkbox/index.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ToggleCompleteTask = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(function (_a) {
    var task = _a.task;
    var toggleCompleteTask = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__.useRoot$)().toggleCompleteTask;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.finished_at), finishedAt = _b[0], setFinishedAt = _b[1];
    var handleToggle = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var finished_at;
        return __generator(this, function (_a) {
            finished_at = e.target.checked ? new Date().toISOString() : null;
            setFinishedAt(finished_at);
            toggleCompleteTask({ taskId: task.id, finishedAt: finished_at });
            return [2 /*return*/];
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], { checked: !!finishedAt, onChange: handleToggle }, "Completed"));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/task-messenger/Message.tsx":
/*!**************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/task-messenger/Message.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



var Message = function (_a) {
    var _b;
    var message = _a.message;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "mb-4 shadow-lg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-base" }, message.content),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm text-gray-400" },
            "By: ", (_b = message === null || message === void 0 ? void 0 : message.created_by) === null || _b === void 0 ? void 0 :
            _b.username),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-xs text-gray-400" }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(message.created_at).format('DD MMM YYYY HH:mm:ss'))));
};


/***/ }),

/***/ "./frontend/src/modules/tasks/components/task-messenger/Messages.tsx":
/*!***************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/task-messenger/Messages.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ "./frontend/src/modules/tasks/components/task-messenger/Message.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Messages = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(function () {
    var _a = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.useRoot$)(), selected_task = _a.selected_task, sendMessage = _a.sendMessage;
    var form = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useForm()[0];
    var handleSendMessage = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            form.validateFields().then(function (values) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    sendMessage({ new_message: values.new_message }).then(function () {
                        form.resetFields();
                    });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col gap-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { form: form, layout: "vertical", name: "new_message", onFinish: handleSendMessage, className: "p-4 bg-white shadow-md rounded-lg" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, { name: "new_message", className: "mb-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"].TextArea, { placeholder: "Write a message...", className: "resize-none border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], { htmlType: "submit", type: "primary", size: "large", className: "w-full" }, "Send"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-2" }, selected_task === null || selected_task === void 0 ? void 0 : selected_task.messages.map(function (message) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Message__WEBPACK_IMPORTED_MODULE_3__.Message, { key: message.id, message: message })); }))));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/task-messenger/TaskMessenger.tsx":
/*!********************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/task-messenger/TaskMessenger.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskMessenger: () => (/* binding */ TaskMessenger)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/modules/tasks/components/task-messenger/Messages.tsx");





var TaskMessenger = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(function () {
    var _a = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.useRoot$)(), selected_task = _a.selected_task, refreshMessenger = _a.refreshMessenger;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!selected_task)
            return;
        var socket = new WebSocket("ws://".concat(window.location.host, "/ws/task_messenger/").concat(selected_task.id, "/"));
        socket.onmessage = function (event) {
            var data = JSON.parse(event.data);
            if (data.type === 'messenger_refresh') {
                refreshMessenger();
            }
        };
        return function () {
            socket.close();
        };
    }, [selected_task === null || selected_task === void 0 ? void 0 : selected_task.id]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", items: [{ key: '1', label: 'Messages', children: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Messages__WEBPACK_IMPORTED_MODULE_3__.Messages, null) }] });
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByState.tsx":
/*!************************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByState.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksFilterByState: () => (/* binding */ TasksFilterByState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/radio/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");




var TasksFilterByState = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(function () {
    var _a = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_1__.useRoot$)(), fetchSelectedTasks = _a.fetchSelectedTasks, tasks_state = _a.tasks_state;
    var onChange = function (e) { return fetchSelectedTasks({ state: e.target.value }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Group, { block: true, onChange: onChange, defaultValue: "active", value: tasks_state },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Button, { value: "all" }, "All"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Button, { value: "active" }, "Active"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Button, { value: "expired" }, "Expired"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Button, { value: "completed" }, "Completed"))));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByText.tsx":
/*!***********************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByText.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksFilterByText: () => (/* binding */ TasksFilterByText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mst/StoreProvider */ "./frontend/mst/StoreProvider.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TasksFilterByText = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), searchText = _a[0], setSearchText = _a[1];
    var _b = (0,_mst_StoreProvider__WEBPACK_IMPORTED_MODULE_2__.useRoot$)(), onChangeField = _b.onChangeField, fetchSelectedTasks = _b.fetchSelectedTasks;
    var onChangeServerSearchInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                onChangeField('tasks_search_text', e.target.value);
                fetchSelectedTasks();
                return [2 /*return*/];
            });
        }); }, 1000);
    }, []);
    var onChange = function (e) {
        setSearchText(e.target.value);
        onChangeServerSearchInput(e);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], { size: 'large', placeholder: "Search...", value: searchText, onChange: onChange })));
});


/***/ }),

/***/ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilters.tsx":
/*!******************************************************************************!*\
  !*** ./frontend/src/modules/tasks/components/tasks-filters/TasksFilters.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksFilters: () => (/* binding */ TasksFilters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TasksFilterByText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksFilterByText */ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByText.tsx");
/* harmony import */ var _TasksFilterByState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TasksFilterByState */ "./frontend/src/modules/tasks/components/tasks-filters/TasksFilterByState.tsx");



var TasksFilters = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TasksFilterByText__WEBPACK_IMPORTED_MODULE_1__.TasksFilterByText, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TasksFilterByState__WEBPACK_IMPORTED_MODULE_2__.TasksFilterByState, null)));
};


/***/ }),

/***/ "./frontend/src/utils/api/deleteTask.ts":
/*!**********************************************!*\
  !*** ./frontend/src/utils/api/deleteTask.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTask: () => (/* binding */ deleteTask)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var deleteTask = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var task_id = _b.task_id;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/deleteTask', {
                    method: 'POST',
                    body: JSON.stringify({ task_id: task_id }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                }).catch(function (error) {
                    console.error('Error /deleteTask:', error);
                    return null;
                })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/editTask.ts":
/*!********************************************!*\
  !*** ./frontend/src/utils/api/editTask.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var editTask = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var formData = _b.formData, tasks_current_page = _b.tasks_current_page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/createTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                    body: JSON.stringify(__assign(__assign({}, formData), { current_page: tasks_current_page })),
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/fetchSelectedTasks.ts":
/*!******************************************************!*\
  !*** ./frontend/src/utils/api/fetchSelectedTasks.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSelectedTasks: () => (/* binding */ fetchSelectedTasks)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fetchSelectedTasks = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page, filter_by_text = _b.filter_by_text, filter_state = _b.filter_state, user_id = _b.user_id;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/fetchSelectedTasks', {
                    method: 'POST',
                    body: JSON.stringify({ page: page, filter_by_text: filter_by_text, filter_state: filter_state, user_id: user_id }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                })
                    .then(function (data) {
                    return data.json();
                })
                    .then(function (data) {
                    return {
                        tasks: JSON.parse(data.tasks),
                        num_pages: +data.num_pages,
                        current_page: +data.current_page,
                    };
                })
                    .catch(function (error) {
                    console.error('Error /fetchSelectedTasks:', error);
                    return null;
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/fetchTaskById.ts":
/*!*************************************************!*\
  !*** ./frontend/src/utils/api/fetchTaskById.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchTaskById: () => (/* binding */ fetchTaskById)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fetchTaskById = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var task_id = _b.task_id;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/fetchTask', {
                    method: 'POST',
                    body: JSON.stringify({ task_id: task_id }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                })
                    .then(function (data) {
                    return data.json();
                })
                    .then(function (data) {
                    return JSON.parse(data.task);
                })
                    .catch(function (error) {
                    console.error('Error /task/:', error);
                    return null;
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/fetchUsersAndTasks.ts":
/*!******************************************************!*\
  !*** ./frontend/src/utils/api/fetchUsersAndTasks.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchUsersAndTasks: () => (/* binding */ fetchUsersAndTasks)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fetchUsersAndTasks = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var user_id = _b.user_id, page = _b.page, filter_by_text = _b.filter_by_text, filter_state = _b.filter_state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/fetchUsersAndTasks', {
                    method: 'POST',
                    body: JSON.stringify({ user_id: user_id, page: page, filter_by_text: filter_by_text, filter_state: filter_state }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                })
                    .then(function (data) {
                    return data.json();
                })
                    .then(function (data) {
                    return {
                        users: JSON.parse(data.users),
                        tasks: JSON.parse(data.tasks),
                        num_pages: +data.num_pages,
                        current_page: +data.current_page,
                    };
                })
                    .catch(function (error) {
                    console.error('Error /fetchUsersAndTasks:', error);
                    return null;
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/index.ts":
/*!*****************************************!*\
  !*** ./frontend/src/utils/api/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ "./frontend/src/utils/api/deleteTask.ts");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask */ "./frontend/src/utils/api/editTask.ts");
/* harmony import */ var _fetchSelectedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchSelectedTasks */ "./frontend/src/utils/api/fetchSelectedTasks.ts");
/* harmony import */ var _fetchTaskById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchTaskById */ "./frontend/src/utils/api/fetchTaskById.ts");
/* harmony import */ var _fetchUsersAndTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchUsersAndTasks */ "./frontend/src/utils/api/fetchUsersAndTasks.ts");
/* harmony import */ var _sendMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sendMessage */ "./frontend/src/utils/api/sendMessage.ts");
/* harmony import */ var _toggleCompleteTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggleCompleteTask */ "./frontend/src/utils/api/toggleCompleteTask.ts");







var api = {
    fetchUsersAndTasks: _fetchUsersAndTasks__WEBPACK_IMPORTED_MODULE_4__.fetchUsersAndTasks,
    fetchSelectedTasks: _fetchSelectedTasks__WEBPACK_IMPORTED_MODULE_2__.fetchSelectedTasks,
    editTask: _editTask__WEBPACK_IMPORTED_MODULE_1__.editTask,
    deleteTask: _deleteTask__WEBPACK_IMPORTED_MODULE_0__.deleteTask,
    toggleCompleteTask: _toggleCompleteTask__WEBPACK_IMPORTED_MODULE_6__.toggleCompleteTask,
    sendMessage: _sendMessage__WEBPACK_IMPORTED_MODULE_5__.sendMessage,
    fetchTaskById: _fetchTaskById__WEBPACK_IMPORTED_MODULE_3__.fetchTaskById,
};


/***/ }),

/***/ "./frontend/src/utils/api/sendMessage.ts":
/*!***********************************************!*\
  !*** ./frontend/src/utils/api/sendMessage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendMessage: () => (/* binding */ sendMessage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var sendMessage = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var new_message = _b.new_message, task_id = _b.task_id;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch('/sendMessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                    body: JSON.stringify({ new_message: new_message, task_id: task_id }),
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (data) {
                    return data.message;
                })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/api/toggleCompleteTask.ts":
/*!******************************************************!*\
  !*** ./frontend/src/utils/api/toggleCompleteTask.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleCompleteTask: () => (/* binding */ toggleCompleteTask)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var toggleCompleteTask = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var e_1;
    var taskId = _b.taskId;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch('/toggleCompleteTask', {
                        method: 'POST',
                        body: JSON.stringify({ taskId: taskId }),
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRFToken': appCsrftoken,
                        },
                    })];
            case 1: return [2 /*return*/, _c.sent()];
            case 2:
                e_1 = _c.sent();
                console.error(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./frontend/src/utils/cn.ts":
/*!**********************************!*\
  !*** ./frontend/src/utils/cn.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}


/***/ }),

/***/ "./frontend/src/assets/images/CM-IMG.png":
/*!***********************************************!*\
  !*** ./frontend/src/assets/images/CM-IMG.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "frontend/src/assets/images/CM-IMG.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ant-design_icons_es_icons_MenuOutlined_js-node_modules_antd_es_alert_ind-a30a4d"], () => (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9091&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"), __webpack_exec__("./node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./frontend/src/application/app_react.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FhRDs7O0tBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZNLElBQU0sa0JBQWtCLEdBQUcsaUVBQU8sRUFBOEI7O1FBQTVCLE1BQU07Ozs7O2dCQUVsQyxxQkFBTSxLQUFLLENBQUMscUJBQXFCLEVBQUU7d0JBQ3RDLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxVQUFFLENBQUM7d0JBQ2hDLE9BQU8sRUFBRTs0QkFDTCxjQUFjLEVBQUUsa0JBQWtCOzRCQUNsQyxhQUFhLEVBQUUsWUFBWTt5QkFDOUI7cUJBQ0osQ0FBQztvQkFQRixzQkFBTyxTQU9MOzs7Z0JBRUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUM7Ozs7O0tBRXZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUNKO0FBRWpDLFNBQVMsRUFBRTtJQUFDLGdCQUF1QjtTQUF2QixVQUF1QixFQUF2QixxQkFBdUIsRUFBdkIsSUFBdUI7UUFBdkIsMkJBQXVCOztJQUN0QyxPQUFPLHVEQUFPLENBQUMsMENBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz82MzNjIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9tc3QvU3RvcmVQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL21zdC9tb2RlbHMvTWVzc2FnZS5tb2RlbC50cyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvbXN0L21vZGVscy9UYXNrLm1vZGVsLnRzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9tc3QvbW9kZWxzL1VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL21zdC9zdG9yZXMvUm9vdC5zdG9yZS50cyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL2FwcGxpY2F0aW9uL2FwcF9yZWFjdC50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0Fub255bW91c0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvQ2xvY2sudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dPdXRCdXR0b24udHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL01vYmlsZU1lbnUudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1RvcGJhci50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9ob29rcy91c2VDb250YWluZXJXaWR0aC50cyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL2hvb2tzL3VzZUN1cnJlbnRMb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL2hvb2tzL3VzZUluaXRNb2R1bGUudHMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL2Rhc2hib2FyZC9DYWxlbmRhckluZGV4LnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvZGFzaGJvYXJkL0NlbGxSZW5kZXIudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy9kYXNoYm9hcmQvQ3VycmVudFRhc2tzQWxlcnQudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy9kYXNoYm9hcmQvRGFzaGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvZGFzaGJvYXJkL0Rhc2hib2FyZEluZGV4LnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvZGFzaGJvYXJkL2hlbHBlcnMvZ2V0Q2FsZW5kYXJEYXRhQnlEYXRhLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvVGFza3MudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy90YXNrcy9UYXNrc0luZGV4LnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy9DcmVhdGVOZXdUYXNrLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy9GaWx0ZXJlZFRhc2tzLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy9TZWxlY3RlZFRhc2tEaWFsb2cudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy90YXNrcy9jb21wb25lbnRzL1NlbGVjdGVkVGFza0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMvU2VsZWN0ZWRUYXNrVmlldy50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMvVGFzay50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMvVGFza3NQYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy9Ub2dnbGVDb21wbGV0ZVRhc2sudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy90YXNrcy9jb21wb25lbnRzL3Rhc2stbWVzc2VuZ2VyL01lc3NhZ2UudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvbW9kdWxlcy90YXNrcy9jb21wb25lbnRzL3Rhc2stbWVzc2VuZ2VyL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy90YXNrLW1lc3Nlbmdlci9UYXNrTWVzc2VuZ2VyLnRzeCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL21vZHVsZXMvdGFza3MvY29tcG9uZW50cy90YXNrcy1maWx0ZXJzL1Rhc2tzRmlsdGVyQnlTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMvdGFza3MtZmlsdGVycy9UYXNrc0ZpbHRlckJ5VGV4dC50c3giLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMvdGFza3MtZmlsdGVycy9UYXNrc0ZpbHRlcnMudHN4Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvdXRpbHMvYXBpL2RlbGV0ZVRhc2sudHMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy91dGlscy9hcGkvZWRpdFRhc2sudHMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy91dGlscy9hcGkvZmV0Y2hTZWxlY3RlZFRhc2tzLnRzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvdXRpbHMvYXBpL2ZldGNoVGFza0J5SWQudHMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL2Zyb250ZW5kL3NyYy91dGlscy9hcGkvZmV0Y2hVc2Vyc0FuZFRhc2tzLnRzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvdXRpbHMvYXBpL2luZGV4LnRzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvdXRpbHMvYXBpL3NlbmRNZXNzYWdlLnRzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9mcm9udGVuZC9zcmMvdXRpbHMvYXBpL3RvZ2dsZUNvbXBsZXRlVGFzay50cyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vZnJvbnRlbmQvc3JjL3V0aWxzL2NuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzAyMzI5OTA2NjNcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB0eXBlIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBJUm9vdCQgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgUm9vdCQgfSBmcm9tICcuL3N0b3Jlcy9Sb290LnN0b3JlJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuY29uc3Qgc3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJUm9vdCQgfCBudWxsPihudWxsKVxuXG5jb25zdCBnZW5lcmF0ZVJvb3QkID0gKCkgPT4gUm9vdCQuY3JlYXRlKHtcbiAgICBzZWxlY3RlZF9kYXRlOiBkYXlqcyhEYXRlLm5vdygpKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpLFxufSlcblxuZXhwb3J0IGNvbnN0IHJvb3QkID0gZ2VuZXJhdGVSb290JCgpXG5cbmV4cG9ydCBjb25zdCB1c2VSb290JCA9ICgpOiBJUm9vdCQgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlQ29udGV4dChzdG9yZUNvbnRleHQpXG4gICAgaWYgKCFzdG9yZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZSBTdG9yZSBzaGFsbCBiZSB1c2VkIHdpdGhpbiBTdG9yZVByb3ZpZGVyJylcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGNvbnN0IFJvb3QkUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgc3RvcmUgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlOyBzdG9yZTogSVJvb3QkIH0pID0+IHtcbiAgICByZXR1cm4gPHN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PntjaGlsZHJlbn08L3N0b3JlQ29udGV4dC5Qcm92aWRlcj5cbn1cbiIsImltcG9ydCB7IHR5cGVzIH0gZnJvbSAnbW9ieC1zdGF0ZS10cmVlJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlci5tb2RlbCdcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSB0eXBlcy5tb2RlbCgnTWVzc2FnZScsIHtcbiAgICBpZDogdHlwZXMuaWRlbnRpZmllck51bWJlcixcbiAgICBjb250ZW50OiB0eXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlZF9hdDogdHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRfYnk6IFVzZXIsXG59KVxuIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdtb2J4LXN0YXRlLXRyZWUnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLm1vZGVsJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZS5tb2RlbCdcblxuZXhwb3J0IGNvbnN0IFRhc2sgPSB0eXBlc1xuICAgIC5tb2RlbCgnVGFzaycsIHtcbiAgICAgICAgaWQ6IHR5cGVzLmlkZW50aWZpZXJOdW1iZXIsXG4gICAgICAgIHRpdGxlOiB0eXBlcy5zdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0eXBlcy5tYXliZU51bGwodHlwZXMuc3RyaW5nKSxcbiAgICAgICAgbG9jYXRpb246IHR5cGVzLm1heWJlTnVsbCh0eXBlcy5zdHJpbmcpLFxuICAgICAgICBkZWFkbGluZTogdHlwZXMubWF5YmVOdWxsKHR5cGVzLnN0cmluZyksXG4gICAgICAgIGNyZWF0ZWRfYXQ6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNfYXV0aG9yOiB0eXBlcy5ib29sZWFuLFxuICAgICAgICBhdXRob3I6IHR5cGVzLm1heWJlTnVsbChVc2VyKSxcbiAgICAgICAgZmluaXNoZWRfYXQ6IHR5cGVzLm1heWJlTnVsbCh0eXBlcy5zdHJpbmcpLFxuICAgICAgICB1c2VyczogdHlwZXMuYXJyYXkoVXNlciksXG4gICAgICAgIG1lc3NhZ2VzOiB0eXBlcy5hcnJheShNZXNzYWdlKSxcbiAgICB9KVxuICAgIC52aWV3cyhzZWxmID0+ICh7XG4gICAgICAgIGdldCBhdXRob3JJblVzZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuYXV0aG9yICYmIHNlbGYudXNlcnMubWFwKHVzZXIgPT4gdXNlci5pZCkuaW5jbHVkZXMoc2VsZi5hdXRob3IuaWQpXG4gICAgICAgIH0sXG4gICAgfSkpXG4iLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJ21vYngtc3RhdGUtdHJlZSdcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSB0eXBlcy5tb2RlbCgnVXNlcicsIHtcbiAgICBpZDogdHlwZXMubnVtYmVyLFxuICAgIHVzZXJuYW1lOiB0eXBlcy5zdHJpbmcsXG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTbmFwc2hvdCwgZmxvdywgdHlwZXMgfSBmcm9tICdtb2J4LXN0YXRlLXRyZWUnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXIubW9kZWwnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL1Rhc2subW9kZWwnXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvYXBpJ1xuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJEYXRhQnlEYXRlIH0gZnJvbSAnLi4vLi4vc3JjL21vZHVsZXMvZGFzaGJvYXJkL2hlbHBlcnMvZ2V0Q2FsZW5kYXJEYXRhQnlEYXRhJ1xuaW1wb3J0IHsgSVRhc2tTbk91dCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgUm9vdCQgPSB0eXBlc1xuICAgIC5tb2RlbCgnUm9vdCQnLCB7XG4gICAgICAgIHVzZXJzOiB0eXBlcy5hcnJheShVc2VyKSxcbiAgICAgICAgdGFza3M6IHR5cGVzLmFycmF5KFRhc2spLFxuXG4gICAgICAgIC8vIHRhc2tzIGZpbHRlcnNcbiAgICAgICAgdGFza3Nfc3RhdGU6IHR5cGVzLm9wdGlvbmFsKFxuICAgICAgICAgICAgdHlwZXMuZW51bWVyYXRpb24oJ1Rhc2tzU3RhdGUnLCBbJ2FsbCcsICdhY3RpdmUnLCAnY29tcGxldGVkJywgJ2V4cGlyZWQnXSksXG4gICAgICAgICAgICAnYWN0aXZlJ1xuICAgICAgICApLFxuICAgICAgICB0YXNrc19jdXJyZW50X3BhZ2U6IC0xLFxuICAgICAgICB0YXNrc19udW1fcGFnZXM6IDEsXG4gICAgICAgIHRhc2tzX3NlYXJjaF90ZXh0OiAnJyxcblxuICAgICAgICAvLyBkYXNoYm9hcmQgc3BlY2lmaWMgZmlsdGVyc1xuICAgICAgICBzZWxlY3RlZF9kYXRlOiB0eXBlcy5zdHJpbmcsXG5cbiAgICAgICAgLy8gdGFzayBkaWFsb2cgdmlldy9lZGl0b3JcbiAgICAgICAgc2VsZWN0ZWRfdGFzazogdHlwZXMuc2FmZVJlZmVyZW5jZShUYXNrKSxcbiAgICB9KVxuICAgIC52aWV3cyhzZWxmID0+ICh7XG4gICAgICAgIGlzQWxsU3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi50YXNrc19zdGF0ZSA9PT0gJ2FsbCdcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXJEYXRhKGRhdGU6IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGdldENhbGVuZGFyRGF0YUJ5RGF0ZShkYXRlLCBzZWxmLnRhc2tzKVxuICAgICAgICB9LFxuICAgIH0pKVxuICAgIC5hY3Rpb25zKHNlbGYgPT4gKHtcbiAgICAgICAgb25DaGFuZ2VGaWVsZDxLZXkgZXh0ZW5kcyBrZXlvZiB0eXBlb2Ygc2VsZj4oa2V5OiBLZXksIHZhbHVlOiAodHlwZW9mIHNlbGYpW0tleV0pIHtcbiAgICAgICAgICAgIHNlbGZba2V5XSA9IHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRTZXR1cCh7IHBhZ2UsIHNlYXJjaFRleHQsIHN0YXRlIH06IHsgcGFnZTogbnVtYmVyOyBzZWFyY2hUZXh0OiBzdHJpbmc7IHN0YXRlOiBzdHJpbmcgfSkge1xuICAgICAgICAgICAgc2VsZi50YXNrc19jdXJyZW50X3BhZ2UgPSBwYWdlXG4gICAgICAgICAgICBzZWxmLnRhc2tzX3NlYXJjaF90ZXh0ID0gc2VhcmNoVGV4dFxuICAgICAgICAgICAgc2VsZi50YXNrc19zdGF0ZSA9IHN0YXRlXG4gICAgICAgIH0sXG4gICAgfSkpXG4gICAgLmFjdGlvbnMoc2VsZiA9PiAoe1xuICAgICAgICBmZXRjaFVzZXJzQW5kVGFza3M6IGZsb3coZnVuY3Rpb24qIF9mZXRjaFVzZXJzQW5kVGFza3MoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBhcGkuZmV0Y2hVc2Vyc0FuZFRhc2tzKHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBhcHBVc2VyLmlkLFxuICAgICAgICAgICAgICAgIHBhZ2U6IHNlbGYudGFza3NfY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgIGZpbHRlcl9ieV90ZXh0OiBzZWxmLnRhc2tzX3NlYXJjaF90ZXh0LFxuICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0ZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXBwbHlTbmFwc2hvdChzZWxmLnVzZXJzLCByZXMudXNlcnMpXG4gICAgICAgICAgICBhcHBseVNuYXBzaG90KHNlbGYudGFza3MsIHJlcy50YXNrcylcbiAgICAgICAgICAgIHNlbGYudGFza3NfbnVtX3BhZ2VzID0gcmVzLm51bV9wYWdlc1xuICAgICAgICAgICAgc2VsZi50YXNrc19jdXJyZW50X3BhZ2UgPSByZXMuY3VycmVudF9wYWdlXG4gICAgICAgIH0pLFxuICAgICAgICBmZXRjaFNlbGVjdGVkVGFza3M6IGZsb3coZnVuY3Rpb24qIF9mZXRjaFNlbGVjdGVkVGFza3MocHJvcHM/OiB7IHN0YXRlOiBzdHJpbmcgfSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHByb3BzPy5zdGF0ZSB8fCBzZWxmLnRhc2tzX3N0YXRlXG4gICAgICAgICAgICBpZiAocHJvcHM/LnN0YXRlKSBzZWxmLnRhc2tzX3N0YXRlID0gc2VsZWN0ZWRTdGF0ZVxuXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBhcGkuZmV0Y2hTZWxlY3RlZFRhc2tzKHtcbiAgICAgICAgICAgICAgICBwYWdlOiBzZWxmLnRhc2tzX2N1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJfYnlfdGV4dDogc2VsZi50YXNrc19zZWFyY2hfdGV4dCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdGU6IHNlbGVjdGVkU3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYXBwVXNlci5pZCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGFwcGx5U25hcHNob3Qoc2VsZi50YXNrcywgcmVzLnRhc2tzKVxuICAgICAgICAgICAgc2VsZi50YXNrc19udW1fcGFnZXMgPSByZXMubnVtX3BhZ2VzXG4gICAgICAgICAgICBzZWxmLnRhc2tzX2N1cnJlbnRfcGFnZSA9IHJlcy5jdXJyZW50X3BhZ2VcbiAgICAgICAgfSksXG4gICAgICAgIGVkaXRUYXNrOiBmbG93KGZ1bmN0aW9uKiBfZWRpdFRhc2soeyBmb3JtRGF0YSB9OiB7IGZvcm1EYXRhOiBJVGFza1NuT3V0IH0pIHtcbiAgICAgICAgICAgIHlpZWxkIGFwaS5lZGl0VGFzayh7IGZvcm1EYXRhLCB0YXNrc19jdXJyZW50X3BhZ2U6IHNlbGYudGFza3NfY3VycmVudF9wYWdlIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBkZWxldGVUYXNrOiBmbG93KGZ1bmN0aW9uKiBfZGVsZXRlVGFzaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tfaWQgPSBzZWxmLnNlbGVjdGVkX3Rhc2s/LmlkXG4gICAgICAgICAgICBpZiAoIXRhc2tfaWQpIHJldHVyblxuICAgICAgICAgICAgeWllbGQgYXBpLmRlbGV0ZVRhc2soeyB0YXNrX2lkIH0pXG4gICAgICAgIH0pLFxuICAgICAgICB0b2dnbGVDb21wbGV0ZVRhc2s6IGZsb3coZnVuY3Rpb24qIF90b2dnbGVDb21wbGV0ZVRhc2soe1xuICAgICAgICAgICAgdGFza0lkLFxuICAgICAgICB9OiB7XG4gICAgICAgICAgICB0YXNrSWQ6IG51bWJlclxuICAgICAgICAgICAgZmluaXNoZWRBdDogc3RyaW5nIHwgbnVsbFxuICAgICAgICB9KSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNBbGxTdGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlTbmFwc2hvdChcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YXNrcyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB5aWVsZCBhcGkudG9nZ2xlQ29tcGxldGVUYXNrKHsgdGFza0lkIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBzZW5kTWVzc2FnZTogZmxvdyhmdW5jdGlvbiogX3NlbmRNZXNzYWdlKHsgbmV3X21lc3NhZ2UgfTogeyBuZXdfbWVzc2FnZTogc3RyaW5nIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tfaWQgPSBzZWxmLnNlbGVjdGVkX3Rhc2s/LmlkXG4gICAgICAgICAgICBpZiAoIXRhc2tfaWQpIHJldHVyblxuXG4gICAgICAgICAgICB5aWVsZCBhcGkuc2VuZE1lc3NhZ2UoeyBuZXdfbWVzc2FnZSwgdGFza19pZCB9KVxuICAgICAgICB9KSxcbiAgICAgICAgcmVmcmVzaE1lc3NlbmdlcjogZmxvdyhmdW5jdGlvbiogX3JlZnJlc2hNZXNzZW5nZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrX2lkID0gc2VsZi5zZWxlY3RlZF90YXNrPy5pZFxuICAgICAgICAgICAgaWYgKCF0YXNrX2lkKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHJlc1Rhc2sgPSB5aWVsZCBhcGkuZmV0Y2hUYXNrQnlJZCh7IHRhc2tfaWQgfSlcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGYudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tfaWQpXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlTbmFwc2hvdChzZWxlY3RlZFRhc2ssIHJlc1Rhc2spXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgIH0pKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgeyBUb3BiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1RvcGJhcidcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2NzcydcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHsgQW5vbnltb3VzTG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL0Fub255bW91c0xvZ2luJ1xuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyJ1xuaW1wb3J0IHsgRGFzaGJvYXJkSW5kZXggfSBmcm9tICcuLi9tb2R1bGVzL2Rhc2hib2FyZC9EYXNoYm9hcmRJbmRleCdcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgVGFza3NJbmRleCB9IGZyb20gJy4uL21vZHVsZXMvdGFza3MvVGFza3NJbmRleCdcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmlmIChyb290KSB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBjcmVhdGVSb290KHJvb3QpXG4gICAgcm9vdEVsZW1lbnQucmVuZGVyKG51bGwpXG59XG5jb25zdCB0b3BiYXJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcGJhcicpXG5pZiAodG9wYmFyUm9vdCkge1xuICAgIGNvbnN0IHRvcGJhclJvb3RFbGVtZW50ID0gY3JlYXRlUm9vdCh0b3BiYXJSb290KVxuICAgIHRvcGJhclJvb3RFbGVtZW50LnJlbmRlcihcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8VG9wYmFyIC8+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICApXG59XG5cbmNvbnN0IGZvb3RlclJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJylcbmlmIChmb290ZXJSb290KSB7XG4gICAgY29uc3QgZm9vdGVyUm9vdEVsZW1lbnQgPSBjcmVhdGVSb290KGZvb3RlclJvb3QpXG4gICAgZm9vdGVyUm9vdEVsZW1lbnQucmVuZGVyKDxGb290ZXIgLz4pXG59XG5cbmNvbnN0IGFub255bW91c0xvZ2luUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbm9ueW1vdXMtbG9naW4nKVxuaWYgKGFub255bW91c0xvZ2luUm9vdCkge1xuICAgIGNvbnN0IGFub255bW91c0xvZ2luUm9vdEVsZW1lbnQgPSBjcmVhdGVSb290KGFub255bW91c0xvZ2luUm9vdClcbiAgICBhbm9ueW1vdXNMb2dpblJvb3RFbGVtZW50LnJlbmRlcig8QW5vbnltb3VzTG9naW4gLz4pXG59XG5cbmNvbnN0IGF1dGhlbnRpY2F0ZWRMb2dpblJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aGVudGljYXRlZC1sb2dpbicpXG5cbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRSb290RWxlbWVudCA9IGF1dGhlbnRpY2F0ZWRMb2dpblJvb3QgPyBjcmVhdGVSb290KGF1dGhlbnRpY2F0ZWRMb2dpblJvb3QpIDogbnVsbFxuXG5leHBvcnQgY29uc3QgcmVuZGVyRGFzaGJvYXJkUm9vdCA9ICgpID0+IHtcbiAgICBkYXNoYm9hcmRSb290RWxlbWVudD8ucmVuZGVyKDxEYXNoYm9hcmRJbmRleCAvPilcbn1cblxucmVuZGVyRGFzaGJvYXJkUm9vdCgpXG5cbmNvbnN0IHJlZ2lzdGVyUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlcicpXG5pZiAocmVnaXN0ZXJSb290KSB7XG4gICAgY29uc3QgcmVnaXN0ZXJSb290RWxlbWVudCA9IGNyZWF0ZVJvb3QocmVnaXN0ZXJSb290KVxuICAgIHJlZ2lzdGVyUm9vdEVsZW1lbnQucmVuZGVyKDxSZWdpc3RlciAvPilcbn1cblxuY29uc3QgbG9naW5Sb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJylcbmlmIChsb2dpblJvb3QpIHtcbiAgICBjb25zdCBsb2dpblJvb3RFbGVtZW50ID0gY3JlYXRlUm9vdChsb2dpblJvb3QpXG4gICAgbG9naW5Sb290RWxlbWVudC5yZW5kZXIoPExvZ2luIC8+KVxufVxuXG4vKiAgKi9cbmNvbnN0IHRhc2tzUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpXG5leHBvcnQgY29uc3QgdGFza3NSb290RWxlbWVudCA9IHRhc2tzUm9vdCA/IGNyZWF0ZVJvb3QodGFza3NSb290KSA6IG51bGxcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzUm9vdCA9ICgpID0+IHtcbiAgICB0YXNrc1Jvb3RFbGVtZW50Py5yZW5kZXIoPFRhc2tzSW5kZXggLz4pXG59XG5cbnJlbmRlclRhc2tzUm9vdCgpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3J5c3RhbE1pbmRJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL0NNLUlNRy5wbmcnXG5cbmV4cG9ydCBjb25zdCBBbm9ueW1vdXNMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17Y3J5c3RhbE1pbmRJbWFnZX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgIGFsdD1cIkNyeXN0YWwgTWluZCBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLWJvdW5jZS1zbG93IHNlbGVjdC1ub25lIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IENsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWUobmV3IERhdGUoKSlcbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPnt0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvZGl2PlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL0Nsb2NrJ1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGgtZnVsbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDbG9jayAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdy1maXQgaC1mdWxsIHRleHQtZ3JheS01MDBcIj5ieSBhbmR5Z3IxbjEgZm9yIEhhcnZhcmQgdW5pdmVyc2l0eTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tICcuLi9ob29rcy91c2VDb250YWluZXJXaWR0aCdcblxuZXhwb3J0IGNvbnN0IExvZ091dEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTGdWaWV3IH0gPSB1c2VXaW5kb3dXaWR0aCgpXG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2xvZ291dC8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGFwcENzcmZ0b2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9eyd3LWZ1bGwgbGc6dy1hdXRvIGFuaW1hdGUtb3BhY2l0eS1pbid9XG4gICAgICAgICAgICBzaXplPXtpc0xnVmlldyA/ICdtaWRkbGUnIDogJ2xhcmdlJ31cbiAgICAgICAgICAgIHNoYXBlPXtpc0xnVmlldyA/ICdyb3VuZCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZGFzaGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVHlwb2dyYXBoeSwgbWVzc2FnZSB9IGZyb20gJ2FudGQnXG5cbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHlcblxuZXhwb3J0IGNvbnN0IExvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgZmV0Y2goJy9sb2dpbi8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBhcHBDc3JmdG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpiZy13aGl0ZSBwLTEwIGxnOnJvdW5kZWQtbWQgbGc6c2hhZG93LW1kIHctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJmb250LWthdXNoYW4gdGV4dC1jZW50ZXJcIj5Mb2dpbjwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cImxvZ2luXCIgb25GaW5pc2g9e29uRmluaXNofT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXNlcm5hbWVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSEnIH1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJwYXNzd29yZFwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkIScgfV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBNZW51T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7IEJ1dHRvbiwgRHJhd2VyIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTG9nT3V0QnV0dG9uIH0gZnJvbSAnLi9Mb2dPdXRCdXR0b24nXG5pbXBvcnQgeyB1c2VDdXJyZW50TG9jYXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VDdXJyZW50TG9jYXRpb24nXG5cbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRMb2NhdGlvbiB9ID0gdXNlQ3VycmVudExvY2F0aW9uKClcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbih2YWwgPT4gIXZhbClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICA8TWVudU91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtMnhsIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17dG9nZ2xlRHJhd2VyfSAvPlxuICAgICAgICAgICAgPERyYXdlciB0aXRsZT1cIkNyeXN0YWwgTWluZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiIHdpZHRoPXs1MDB9IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcn0gb3Blbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHNpemU9XCJsYXJnZVwiIHR5cGU9e3NlbGVjdGVkTG9jYXRpb24oJycpfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHNpemU9XCJsYXJnZVwiIHR5cGU9e3NlbGVjdGVkTG9jYXRpb24oJ3Rhc2tzJyl9IGhyZWY9XCIvdGFza3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nT3V0QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsXCIgc2l6ZT1cImxhcmdlXCIgdHlwZT1cImRhc2hlZFwiIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gbm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHNpemU9XCJsYXJnZVwiIHR5cGU9XCJkYXNoZWRcIiBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBUeXBvZ3JhcGh5LCBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcblxuY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeVxuXG5leHBvcnQgY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiB7IHVzZXJuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmc7IGNvbmZpcm1hdGlvbjogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgZmV0Y2goJy9yZWdpc3Rlci8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBhcHBDc3JmdG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpiZy13aGl0ZSBwLTEwIGxnOnJvdW5kZWQtbWQgbGc6c2hhZG93LW1kIHctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJmb250LWthdXNoYW4gdGV4dC1jZW50ZXJcIj5SZWdpc3RlcjwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInJlZ2lzdGVyXCIgb25GaW5pc2g9e29uRmluaXNofT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXNlcm5hbWVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSEnIH1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRW1haWwhJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiBhdXRvQ29tcGxldGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyB9XX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBQYXNzd29yZCEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoZSB0d28gcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCEnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gTG9naW5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IExvZ091dEJ1dHRvbiB9IGZyb20gJy4vTG9nT3V0QnV0dG9uJ1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4vTW9iaWxlTWVudSdcbmltcG9ydCB7IHVzZUN1cnJlbnRMb2NhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZUN1cnJlbnRMb2NhdGlvbidcblxuZXhwb3J0IGNvbnN0IFRvcGJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkTG9jYXRpb24gfSA9IHVzZUN1cnJlbnRMb2NhdGlvbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtZDpmbGV4LXJvdyBnYXAtMTAgbWQ6Z2FwLTAgcC01XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtaW4tdy1maXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBweC0yIGZvbnQta2F1c2hhbiB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTUwMCB2aWEtcHVycGxlLTUwMCB0by1waW5rLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3J5c3RhbCBNaW5kXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC0yIHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHshaXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWVuZCBnYXAtNCBpdGVtcy1jZW50ZXIgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHR5cGU9XCJkYXNoZWRcIiBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvaW4gbm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgdHlwZT1cImRhc2hlZFwiIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIHB4LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgdHlwZT17c2VsZWN0ZWRMb2NhdGlvbignJyl9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHR5cGU9e3NlbGVjdGVkTG9jYXRpb24oJ3Rhc2tzJyl9IGhyZWY9XCIvdGFza3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPmNvbm5lY3RlZCBhcyB7YXBwVXNlcj8udXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ091dEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1vYmlsZU1lbnUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB0eXBlIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGFpbmVyV2lkdGgoZWxlbWVudFJlZj86IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PlxuICAgICAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgoZWxlbWVudFJlZj8uY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcblxuICAgICAgICBoYW5kbGVSZXNpemUoKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIH0sIFt3aW5kb3cuaW5uZXJXaWR0aF0pXG5cbiAgICByZXR1cm4gY29udGFpbmVyV2lkdGhcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1dpZHRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHVzZUNvbnRhaW5lcldpZHRoKCkgfHwgMFxuICAgIHJldHVybiB7XG4gICAgICAgIGlzTWRWaWV3OiBjdXJyZW50V2lkdGggPiA3NjgsXG4gICAgICAgIGlzTGdWaWV3OiBjdXJyZW50V2lkdGggPiAxMDI0LFxuICAgICAgICBpc1hsVmlldzogY3VycmVudFdpZHRoID4gMTI4MCxcbiAgICB9XG59XG4iLCJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBjb25zdCB1c2VDdXJyZW50TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgICBjb25zdCBzZWxlY3RlZExvY2F0aW9uID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZExvY2F0aW9uID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZUFsbCgnLycsICcnKSA9PT0gdmFsdWVcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByaW1hcnknXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ2RlZmF1bHQnXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2VsZWN0ZWRMb2NhdGlvbiB9XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJvb3QkIH0gZnJvbSAnLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5cbmV4cG9ydCBjb25zdCB1c2VJbml0TW9kdWxlID0gKHsgcGFnZSwgc2VhcmNoVGV4dCwgc3RhdGUgfTogeyBwYWdlOiBudW1iZXI7IHNlYXJjaFRleHQ6IHN0cmluZzsgc3RhdGU6IHN0cmluZyB9KSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcm9vdCQuaW5pdFNldHVwKHsgcGFnZSwgc2VhcmNoVGV4dCwgc3RhdGUgfSlcbiAgICAgICAgcm9vdCQuZmV0Y2hVc2Vyc0FuZFRhc2tzKClcblxuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3dzL3Rhc2tzL2ApXG4gICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVzZXJzID0gSlNPTi5wYXJzZShkYXRhLnJlbGF0ZWRfdXNlcnMpXG4gICAgICAgICAgICBjb25zdCB1c2VySW5SZWxhdGVkVXNlcnMgPSByZWxhdGVkVXNlcnMuaW5jbHVkZXMoYXBwVXNlci5pZClcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd0YXNrc19yZWZyZXNoJyAmJiB1c2VySW5SZWxhdGVkVXNlcnMpIHtcbiAgICAgICAgICAgICAgICByb290JC5mZXRjaFNlbGVjdGVkVGFza3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHR5cGUgeyBEYXlqcyB9IGZyb20gJ2RheWpzJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tICcuLi8uLi9ob29rcy91c2VDb250YWluZXJXaWR0aCdcbmltcG9ydCB7IHVzZVJvb3QkIH0gZnJvbSAnLi4vLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB7IENlbGxSZW5kZXIgfSBmcm9tICcuL0NlbGxSZW5kZXInXG5cbmV4cG9ydCBjb25zdCBDYWxlbmRhckluZGV4ID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMZ1ZpZXcgfSA9IHVzZVdpbmRvd1dpZHRoKClcbiAgICBjb25zdCB7IG9uQ2hhbmdlRmllbGQgfSA9IHVzZVJvb3QkKClcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IGRheWpzKERhdGUubm93KCkpKVxuXG4gICAgY29uc3Qgb25TZWxlY3QgPSAobmV3VmFsdWU6IERheWpzKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxuICAgICAgICBvbkNoYW5nZUZpZWxkKCdzZWxlY3RlZF9kYXRlJywgbmV3VmFsdWUuZm9ybWF0KCdERCBNTU1NIFlZWVknKSlcbiAgICB9XG5cbiAgICBjb25zdCBvblBhbmVsQ2hhbmdlID0gKG5ld1ZhbHVlOiBEYXlqcykgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTUgYmctd2hpdGUgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgICAgY2VsbFJlbmRlcj17XG4gICAgICAgICAgICAgICAgICAgIGlzTGdWaWV3ID8gKHZhbHVlOiBEYXlqcykgPT4gPENlbGxSZW5kZXIgdmFsdWU9e3ZhbHVlLmZvcm1hdCgnREQgTU1NTSBZWVlZJyl9IC8+IDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW49e2lzTGdWaWV3fVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgICAgICAgb25QYW5lbENoYW5nZT17b25QYW5lbENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPYnNlcnZlciwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgY29uc3QgQ2VsbFJlbmRlciA9IG9ic2VydmVyKCh7IHZhbHVlIH06IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgeyBjYWxlbmRhckRhdGEgfSA9IHVzZVJvb3QkKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8T2JzZXJ2ZXI+XG4gICAgICAgICAgICB7KCkgPT4gKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyRGF0YSh2YWx1ZSkubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS5pc19hdXRob3IgPyAnc3VjY2VzcycgOiAnZGVmYXVsdCd9IHRleHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9PYnNlcnZlcj5cbiAgICApXG59KVxuIiwiaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tICcuLi8uLi9ob29rcy91c2VDb250YWluZXJXaWR0aCdcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi90YXNrcy9jb21wb25lbnRzL1Rhc2snXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5cbmV4cG9ydCBjb25zdCBDdXJyZW50VGFza3NBbGVydCA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7IGlzTGdWaWV3IH0gPSB1c2VXaW5kb3dXaWR0aCgpXG4gICAgY29uc3QgeyBzZWxlY3RlZF9kYXRlLCBjYWxlbmRhckRhdGEgfSA9IHVzZVJvb3QkKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNMZ1ZpZXcgJiYgPEFsZXJ0IG1lc3NhZ2U9e2BUYXNrcyBvbiAke2RheWpzKHNlbGVjdGVkX2RhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyl9YH0gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgbXktNFwiPlxuICAgICAgICAgICAgICAgIHtjYWxlbmRhckRhdGEoc2VsZWN0ZWRfZGF0ZSk/Lm1hcCh0YXNrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQ29udGFpbmVyV2lkdGgnXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHsgQ2FsZW5kYXJJbmRleCB9IGZyb20gJy4vQ2FsZW5kYXJJbmRleCdcbmltcG9ydCB7IGNuIH0gZnJvbSAnLi4vLi4vdXRpbHMvY24nXG5pbXBvcnQgeyBDdXJyZW50VGFza3NBbGVydCB9IGZyb20gJy4vQ3VycmVudFRhc2tzQWxlcnQnXG5pbXBvcnQgeyBTZWxlY3RlZFRhc2tEaWFsb2cgfSBmcm9tICcuLi90YXNrcy9jb21wb25lbnRzL1NlbGVjdGVkVGFza0RpYWxvZydcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZCA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7IGlzTGdWaWV3IH0gPSB1c2VXaW5kb3dXaWR0aCgpXG4gICAgY29uc3QgeyBzZWxlY3RlZF9kYXRlIH0gPSB1c2VSb290JCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTUgcC0xMCBmbGV4LWNvbCB3LWZ1bGwgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgIHshaXNMZ1ZpZXcgPyAoXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRheWpzKHNlbGVjdGVkX2RhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNHhsIHAtNSBiZy13aGl0ZSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJbmRleCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJbmRleCAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbigndy1mdWxsJywgaXNMZ1ZpZXcgJiYgJ21heC13LW1kIG1heC1oLVs4MzBweF0gb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvJyl9PlxuICAgICAgICAgICAgICAgIDxDdXJyZW50VGFza3NBbGVydCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VsZWN0ZWRUYXNrRGlhbG9nIHJlYWRvbmx5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHJvb3QkLCBSb290JFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL0Rhc2hib2FyZCdcbmltcG9ydCB7IHVzZUluaXRNb2R1bGUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJbml0TW9kdWxlJ1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkSW5kZXggPSAoKSA9PiB7XG4gICAgdXNlSW5pdE1vZHVsZSh7IHBhZ2U6IC0xLCBzZWFyY2hUZXh0OiAnJywgc3RhdGU6ICdhY3RpdmUnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um9vdCRQcm92aWRlciBzdG9yZT17cm9vdCR9PlxuICAgICAgICAgICAgPERhc2hib2FyZCAvPlxuICAgICAgICA8L1Jvb3QkUHJvdmlkZXI+XG4gICAgKVxufVxuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHsgSVRhc2sgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRDYWxlbmRhckRhdGFCeURhdGUgPSAoZGF0ZTogc3RyaW5nLCB0YXNrczogSVRhc2tbXSkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tTdGFydERhdGUgPSBkYXlqcyh0YXNrLmNyZWF0ZWRfYXQpXG4gICAgICAgIGNvbnN0IHRhc2tEZWFkbGluZSA9IGRheWpzKHRhc2suZGVhZGxpbmUpLmVuZE9mKCdkYXknKVxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRheWpzKGRhdGUpLmVuZE9mKCdkYXknKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5pc1NhbWUodGFza1N0YXJ0RGF0ZSwgJ2RheScpIHx8XG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5pc1NhbWUodGFza0RlYWRsaW5lLCAnZGF5JykgfHxcbiAgICAgICAgICAgIChjdXJyZW50RGF0ZS5pc0FmdGVyKHRhc2tTdGFydERhdGUsICdkYXknKSAmJiBjdXJyZW50RGF0ZS5pc0JlZm9yZSh0YXNrRGVhZGxpbmUsICdkYXknKSlcbiAgICAgICAgKVxuICAgIH0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDcmVhdGVOZXdUYXNrIH0gZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZU5ld1Rhc2snXG5pbXBvcnQgeyBGaWx0ZXJlZFRhc2tzIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcmVkVGFza3MnXG5pbXBvcnQgeyBUYXNrc1BhZ2luYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvVGFza3NQYWdpbmF0aW9uJ1xuaW1wb3J0IHsgVGFza3NGaWx0ZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tzLWZpbHRlcnMvVGFza3NGaWx0ZXJzJ1xuaW1wb3J0IHsgU2VsZWN0ZWRUYXNrRGlhbG9nIH0gZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdGVkVGFza0RpYWxvZydcblxuZXhwb3J0IGNvbnN0IFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZ2FwLTUgZmxleC1jb2wgbWF4LXctbGcgbS1hdXRvIGgtZnVsbCBteS0xMCBweC01IG1kOnB4LTBcIj5cbiAgICAgICAgICAgIDxUYXNrc0ZpbHRlcnMgLz5cbiAgICAgICAgICAgIDxDcmVhdGVOZXdUYXNrIC8+XG4gICAgICAgICAgICA8RmlsdGVyZWRUYXNrcyAvPlxuICAgICAgICAgICAgPFRhc2tzUGFnaW5hdGlvbiAvPlxuICAgICAgICAgICAgey8qIGRpYWxvZ3MgKi99XG4gICAgICAgICAgICA8U2VsZWN0ZWRUYXNrRGlhbG9nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJvb3QkLCBSb290JFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vVGFza3MnXG5pbXBvcnQgeyB1c2VJbml0TW9kdWxlIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5pdE1vZHVsZSdcblxuZXhwb3J0IGNvbnN0IFRhc2tzSW5kZXggPSAoKSA9PiB7XG4gICAgdXNlSW5pdE1vZHVsZSh7IHBhZ2U6IDEsIHNlYXJjaFRleHQ6ICcnLCBzdGF0ZTogJ2FjdGl2ZScgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um9vdCRQcm92aWRlciBzdG9yZT17cm9vdCR9PlxuICAgICAgICAgICAgPFRhc2tzIC8+XG4gICAgICAgIDwvUm9vdCRQcm92aWRlcj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIEZvcm0sIElucHV0LCBEYXRlUGlja2VyLCBTZWxlY3QgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU5ld1Rhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VycywgdGFza3NfY3VycmVudF9wYWdlIH0gPSB1c2VSb290JCgpXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKClcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2NyZWF0ZVRhc2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogYXBwQ3NyZnRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnZhbHVlcywgY3VycmVudF9wYWdlOiB0YXNrc19jdXJyZW50X3BhZ2UgfSksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRhc2s6JywgcmVzLnN0YXR1c1RleHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWYWxpZGF0ZSBGYWlsZWQ6JywgaW5mbylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHNpemU9XCJsYXJnZVwiIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd01vZGFsfT5cbiAgICAgICAgICAgICAgICBOZXcgdGFza1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgbmV3IHRhc2tcIlxuICAgICAgICAgICAgICAgIG9wZW49e2lzTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm0gZm9ybT17Zm9ybX0gbGF5b3V0PVwidmVydGljYWxcIiBuYW1lPVwiY3JlYXRlX3Rhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHRoZSB0aXRsZSBvZiB0aGUgdGFzayEnIH1dfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2shJyB9XX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IHRoZSBkZWFkbGluZSEnIH1dfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzaG93VGltZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibG9jYXRpb25cIiBsYWJlbD1cIkxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJzXCIgbGFiZWw9XCJBc3NpZ24gdG8gVXNlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgYWxsb3dDbGVhciBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHBsYWNlaG9sZGVyPVwiU2VsZWN0IHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3VzZXIuaWR9IHZhbHVlPXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9UYXNrJ1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuXG5leHBvcnQgY29uc3QgRmlsdGVyZWRUYXNrcyA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7IHRhc2tzIH0gPSB1c2VSb290JCgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01XCI+XG4gICAgICAgICAgICB7dGFza3MubWFwKHRhc2sgPT4gKFxuICAgICAgICAgICAgICAgIDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBTZWxlY3RlZFRhc2tWaWV3IH0gZnJvbSAnLi9TZWxlY3RlZFRhc2tWaWV3J1xuaW1wb3J0IHsgU2VsZWN0ZWRUYXNrRWRpdG9yIH0gZnJvbSAnLi9TZWxlY3RlZFRhc2tFZGl0b3InXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5cbmV4cG9ydCBjb25zdCBTZWxlY3RlZFRhc2tEaWFsb2c6IFJlYWN0LkZDPHsgcmVhZG9ubHk/OiBib29sZWFuIH0+ID0gb2JzZXJ2ZXIoKHsgcmVhZG9ubHkgPSBmYWxzZSB9KSA9PiB7XG4gICAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWRfdGFzaywgb25DaGFuZ2VGaWVsZCB9ID0gdXNlUm9vdCQoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBkZXN0cm95T25DbG9zZVxuICAgICAgICAgICAgb3Blbj17ISFzZWxlY3RlZF90YXNrfVxuICAgICAgICAgICAgdGl0bGU9e3NlbGVjdGVkX3Rhc2s/LnRpdGxlfVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFZGl0TW9kZShmYWxzZSlcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUZpZWxkKCdzZWxlY3RlZF90YXNrJywgdW5kZWZpbmVkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFlZGl0TW9kZSA/IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0ZWRUYXNrVmlldyB0b2dnbGVFZGl0TW9kZT17KCkgPT4gc2V0RWRpdE1vZGUoIWVkaXRNb2RlKX0gcmVhZG9ubHk9e3JlYWRvbmx5fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0ZWRUYXNrRWRpdG9yIHRvZ2dsZUVkaXRNb2RlPXsoKSA9PiBzZXRFZGl0TW9kZShwcmV2ID0+ICFwcmV2KX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKVxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm0sIElucHV0LCBEYXRlUGlja2VyLCBTZWxlY3QsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgY3VzdG9tUGFyc2VGb3JtYXQgZnJvbSAnZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0J1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdClcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcblxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkVGFza0VkaXRvcjogUmVhY3QuRkM8e1xuICAgIHRvZ2dsZUVkaXRNb2RlOiAoKSA9PiB2b2lkXG59PiA9ICh7IHRvZ2dsZUVkaXRNb2RlIH0pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkX3Rhc2ssIHVzZXJzLCBlZGl0VGFzayB9ID0gdXNlUm9vdCQoKVxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpXG5cbiAgICBjb25zdCBoYW5kbGVPayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcygpXG4gICAgICAgICAgICAudGhlbihhc3luYyB2YWx1ZXMgPT4gYXdhaXQgZWRpdFRhc2soeyBmb3JtRGF0YTogeyAuLi52YWx1ZXMsIGlkOiBzZWxlY3RlZF90YXNrPy5pZCB9IH0pKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKVxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRNb2RlKClcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZF90YXNrKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICBuYW1lPVwiZWRpdF90YXNrXCJcbiAgICAgICAgICAgIG9uRmluaXNoPXtoYW5kbGVPa31cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZF90YXNrLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lOiBzZWxlY3RlZF90YXNrLmRlYWRsaW5lID8gZGF5anMoc2VsZWN0ZWRfdGFzay5kZWFkbGluZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBzZWxlY3RlZF90YXNrLnVzZXJzLm1hcCh1c2VyID0+IHVzZXIuaWQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHRoZSB0aXRsZSBvZiB0aGUgdGFzayEnIH1dfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrIScgfV19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgdGhlIGRlYWRsaW5lIScgfV19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2hvd1RpbWUgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibG9jYXRpb25cIiBsYWJlbD1cIkxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJzXCIgbGFiZWw9XCJBc3NpZ24gdG8gVXNlcnNcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IG1vZGU9XCJtdWx0aXBsZVwiIGFsbG93Q2xlYXIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwbGFjZWhvbGRlcj1cIlNlbGVjdCB1c2Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3VzZXIuaWR9IHZhbHVlPXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGdhcC0yIG10LTUganVzdGlmeS1lbmQnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVFZGl0TW9kZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTW9kYWwsIFR5cG9ncmFwaHksIERpdmlkZXIsIFRhZywgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IGNuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY24nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgeyBUYXNrTWVzc2VuZ2VyIH0gZnJvbSAnLi90YXNrLW1lc3Nlbmdlci9UYXNrTWVzc2VuZ2VyJ1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcblxuY29uc3QgeyBUZXh0IH0gPSBUeXBvZ3JhcGh5XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RlZFRhc2tWaWV3OiBSZWFjdC5GQzx7XG4gICAgdG9nZ2xlRWRpdE1vZGU6ICgpID0+IHZvaWRcbiAgICByZWFkb25seT86IGJvb2xlYW5cbn0+ID0gKHsgdG9nZ2xlRWRpdE1vZGUsIHJlYWRvbmx5ID0gZmFsc2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRfdGFzaywgb25DaGFuZ2VGaWVsZCwgZGVsZXRlVGFzayB9ID0gdXNlUm9vdCQoKVxuXG4gICAgaWYgKCFzZWxlY3RlZF90YXNrKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPntzZWxlY3RlZF90YXNrPy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgey8qIGxvY2F0aW9uICovfVxuICAgICAgICAgICAge3NlbGVjdGVkX3Rhc2s/LmxvY2F0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHJvbmc+TG9jYXRpb246IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwicmVkXCI+e3NlbGVjdGVkX3Rhc2s/LmxvY2F0aW9ufTwvVGFnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46ICc0cHggMCcgfX0gLz5cbiAgICAgICAgICAgIHsvKiByZWxhdGVkIHVzZXJzICovfVxuICAgICAgICAgICAgeyEhc2VsZWN0ZWRfdGFzaz8udXNlcnM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0cm9uZz5SZWxhdGVkIFVzZXJzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRfdGFzay51c2Vycy5tYXAodXNlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e3VzZXIuaWQgPT09IGFwcFVzZXI/LmlkID8gJ2dvbGQnIDogJ2JsdWUnfSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VsZWN0ZWRfdGFzay5hdXRob3JJblVzZXJzICYmIDxUYWcgY29sb3I9XCJnb2xkXCI+e3NlbGVjdGVkX3Rhc2suYXV0aG9yPy51c2VybmFtZX08L1RhZz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IG1hcmdpbjogJzRweCAwJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+Q3JlYXRlZCBhdCA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC14c1wiPntkYXlqcyhzZWxlY3RlZF90YXNrLmNyZWF0ZWRfYXQpLmZvcm1hdCgnREQgTU1NIFlZWVkgSEg6bW0nKX08L1RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC14c1wiPkRlYWRsaW5lIGF0IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e2RheWpzKHNlbGVjdGVkX3Rhc2suZGVhZGxpbmUpLmZvcm1hdCgnREQgTU1NIFlZWVkgSEg6bW0nKX08L1RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3NlbGVjdGVkX3Rhc2suZmluaXNoZWRfYXQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQteHNcIj5GaW5pc2hlZCBhdCA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQteHNcIj57ZGF5anMoc2VsZWN0ZWRfdGFzay5maW5pc2hlZF9hdCkuZm9ybWF0KCdERCBNTU0gWVlZWSBISDptbScpfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2VsZWN0ZWRfdGFzayAmJiA8VGFza01lc3NlbmdlciAvPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignZmxleCBnYXAtMiBtdC01Jywgc2VsZWN0ZWRfdGFzay5pc19hdXRob3IgPyAnIGp1c3RpZnktYmV0d2VlbicgOiAnanVzdGlmeS1lbmQnKX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkX3Rhc2suaXNfYXV0aG9yICYmICFyZWFkb25seSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGFsLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9rOiBkZWxldGVUYXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiAoXywgeyBPa0J0biwgQ2FuY2VsQnRuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbmNlbEJ0biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPa0J0biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiB3LWZ1bGwganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkX3Rhc2suaXNfYXV0aG9yICYmICFyZWFkb25seSAmJiA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUVkaXRNb2RlfT5FZGl0PC9CdXR0b24+fVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlRmllbGQoJ3NlbGVjdGVkX3Rhc2snLCB1bmRlZmluZWQpfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIERpdmlkZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgVG9nZ2xlQ29tcGxldGVUYXNrIH0gZnJvbSAnLi9Ub2dnbGVDb21wbGV0ZVRhc2snXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB7IElUYXNrIH0gZnJvbSAnLi4vLi4vLi4vLi4vbXN0L3R5cGVzJ1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IGNhc3RUb1NuYXBzaG90IH0gZnJvbSAnbW9ieC1zdGF0ZS10cmVlJ1xuXG5jb25zdCB7IFRleHQgfSA9IFR5cG9ncmFwaHlcblxuZXhwb3J0IGNvbnN0IFRhc2s6IFJlYWN0LkZDPHsgdGFzazogSVRhc2sgfT4gPSBvYnNlcnZlcigoeyB0YXNrIH0pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlRmllbGQgfSA9IHVzZVJvb3QkKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgdGl0bGU9e3Rhc2sudGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YXNrLWNhcmQgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5hbnQtY2hlY2tib3gtd3JhcHBlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUZpZWxkKCdzZWxlY3RlZF90YXNrJywgY2FzdFRvU25hcHNob3QodGFzay5pZCkpXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+Q3JlYXRlZDo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQteHNcIj57ZGF5anModGFzay5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REIE1NTSBZWVlZIEhIOm1tJyl9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+RGVhZGxpbmU6PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e2RheWpzKHRhc2suZGVhZGxpbmUpLmZvcm1hdCgnREQgTU1NIFlZWVkgSEg6bW0nKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIHt0YXNrLmlzX2F1dGhvciAmJiA8VG9nZ2xlQ29tcGxldGVUYXNrIHRhc2s9e3Rhc2t9IC8+fVxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuXG5leHBvcnQgY29uc3QgVGFza3NQYWdpbmF0aW9uID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IHsgdGFza3NfbnVtX3BhZ2VzLCBvbkNoYW5nZUZpZWxkLCBmZXRjaFNlbGVjdGVkVGFza3MsIHRhc2tzIH0gPSB1c2VSb290JCgpXG4gICAgY29uc3Qgb25QYWdlQ2hhbmdlID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICBvbkNoYW5nZUZpZWxkKCd0YXNrc19jdXJyZW50X3BhZ2UnLCBwYWdlKVxuICAgICAgICBmZXRjaFNlbGVjdGVkVGFza3MoKVxuICAgIH1cbiAgICBpZiAoIXRhc2tzLmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBwYWdlU2l6ZT17NX1cbiAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxuICAgICAgICAgICAgdG90YWw9e3Rhc2tzX251bV9wYWdlcyAqIDV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbNV19XG4gICAgICAgIC8+XG4gICAgKVxufSlcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgQ2hlY2tib3hDaGFuZ2VFdmVudCB9IGZyb20gJ2FudGQvZXMvY2hlY2tib3gnXG5pbXBvcnQgeyBJVGFzayB9IGZyb20gJy4uLy4uLy4uLy4uL21zdC90eXBlcydcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcblxuZXhwb3J0IGNvbnN0IFRvZ2dsZUNvbXBsZXRlVGFzazogUmVhY3QuRkM8eyB0YXNrOiBJVGFzayB9PiA9IG9ic2VydmVyKCh7IHRhc2sgfSkgPT4ge1xuICAgIGNvbnN0IHsgdG9nZ2xlQ29tcGxldGVUYXNrIH0gPSB1c2VSb290JCgpXG4gICAgY29uc3QgW2ZpbmlzaGVkQXQsIHNldEZpbmlzaGVkQXRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4odGFzay5maW5pc2hlZF9hdClcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IGFzeW5jIChlOiBDaGVja2JveENoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkX2F0ID0gZS50YXJnZXQuY2hlY2tlZCA/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSA6IG51bGxcbiAgICAgICAgc2V0RmluaXNoZWRBdChmaW5pc2hlZF9hdClcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVUYXNrKHsgdGFza0lkOiB0YXNrLmlkLCBmaW5pc2hlZEF0OiBmaW5pc2hlZF9hdCB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkPXshIWZpbmlzaGVkQXR9IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGV9PlxuICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgKVxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IHsgSU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tc3QvdHlwZXMnXG5leHBvcnQgY29uc3QgTWVzc2FnZTogUmVhY3QuRkM8eyBtZXNzYWdlOiBJTWVzc2FnZSB9PiA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1iLTQgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPnttZXNzYWdlLmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPkJ5OiB7bWVzc2FnZT8uY3JlYXRlZF9ieT8udXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntkYXlqcyhtZXNzYWdlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnREQgTU1NIFlZWVkgSEg6bW06c3MnKX08L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cbiIsImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm9vdCQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tc3QvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSdcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRfdGFzaywgc2VuZE1lc3NhZ2UgfSA9IHVzZVJvb3QkKClcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKVxuXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKS50aGVuKGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSh7IG5ld19tZXNzYWdlOiB2YWx1ZXMubmV3X21lc3NhZ2UgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdfbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5ld19tZXNzYWdlXCIgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMjAwIGZvY3VzOnJpbmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkX3Rhc2s/Lm1lc3NhZ2VzLm1hcChtZXNzYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0pXG4iLCJpbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb290JCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21zdC9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4vTWVzc2FnZXMnXG5cbmV4cG9ydCBjb25zdCBUYXNrTWVzc2VuZ2VyID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRfdGFzaywgcmVmcmVzaE1lc3NlbmdlciB9ID0gdXNlUm9vdCQoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZF90YXNrKSByZXR1cm5cblxuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3dzL3Rhc2tfbWVzc2VuZ2VyLyR7c2VsZWN0ZWRfdGFzay5pZH0vYClcbiAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnbWVzc2VuZ2VyX3JlZnJlc2gnKSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaE1lc3NlbmdlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKClcbiAgICAgICAgfVxuICAgIH0sIFtzZWxlY3RlZF90YXNrPy5pZF0pXG5cbiAgICByZXR1cm4gPENvbGxhcHNlIHNpemU9XCJsYXJnZVwiIGl0ZW1zPXtbeyBrZXk6ICcxJywgbGFiZWw6ICdNZXNzYWdlcycsIGNoaWxkcmVuOiA8TWVzc2FnZXMgLz4gfV19IC8+XG59KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBSYWRpb0NoYW5nZUV2ZW50IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHVzZVJvb3QkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcblxuZXhwb3J0IGNvbnN0IFRhc2tzRmlsdGVyQnlTdGF0ZSA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7IGZldGNoU2VsZWN0ZWRUYXNrcywgdGFza3Nfc3RhdGUgfSA9IHVzZVJvb3QkKClcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJhZGlvQ2hhbmdlRXZlbnQpID0+IGZldGNoU2VsZWN0ZWRUYXNrcyh7IHN0YXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBibG9jayBvbkNoYW5nZT17b25DaGFuZ2V9IGRlZmF1bHRWYWx1ZT1cImFjdGl2ZVwiIHZhbHVlPXt0YXNrc19zdGF0ZX0+XG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImFsbFwiPkFsbDwvUmFkaW8uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJhY3RpdmVcIj5BY3RpdmU8L1JhZGlvLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZXhwaXJlZFwiPkV4cGlyZWQ8L1JhZGlvLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9SYWRpby5CdXR0b24+XG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gtZXMnXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcbmltcG9ydCB7IHVzZVJvb3QkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbXN0L1N0b3JlUHJvdmlkZXInXG5cbmV4cG9ydCBjb25zdCBUYXNrc0ZpbHRlckJ5VGV4dCA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCB7IG9uQ2hhbmdlRmllbGQsIGZldGNoU2VsZWN0ZWRUYXNrcyB9ID0gdXNlUm9vdCQoKVxuXG4gICAgY29uc3Qgb25DaGFuZ2VTZXJ2ZXJTZWFyY2hJbnB1dCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVib3VuY2UoYXN5bmMgKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2VGaWVsZCgndGFza3Nfc2VhcmNoX3RleHQnLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIGZldGNoU2VsZWN0ZWRUYXNrcygpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgICAgc2V0U2VhcmNoVGV4dChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgb25DaGFuZ2VTZXJ2ZXJTZWFyY2hJbnB1dChlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgc2l6ZT17J2xhcmdlJ30gcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17c2VhcmNoVGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFza3NGaWx0ZXJCeVRleHQgfSBmcm9tICcuL1Rhc2tzRmlsdGVyQnlUZXh0J1xuaW1wb3J0IHsgVGFza3NGaWx0ZXJCeVN0YXRlIH0gZnJvbSAnLi9UYXNrc0ZpbHRlckJ5U3RhdGUnXG5cbmV4cG9ydCBjb25zdCBUYXNrc0ZpbHRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUYXNrc0ZpbHRlckJ5VGV4dCAvPlxuICAgICAgICAgICAgPFRhc2tzRmlsdGVyQnlTdGF0ZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jICh7IHRhc2tfaWQgfTogeyB0YXNrX2lkOiBudW1iZXIgfSkgPT4ge1xuICAgIGF3YWl0IGZldGNoKCcvZGVsZXRlVGFzaycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGFza19pZCB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGFwcENzcmZ0b2tlbixcbiAgICAgICAgfSxcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC9kZWxldGVUYXNrOicsIGVycm9yKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBJVGFza1NuT3V0IH0gZnJvbSAnLi4vLi4vLi4vbXN0L3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2sgPSBhc3luYyAoe1xuICAgIGZvcm1EYXRhLFxuICAgIHRhc2tzX2N1cnJlbnRfcGFnZSxcbn06IHtcbiAgICBmb3JtRGF0YTogSVRhc2tTbk91dFxuICAgIHRhc2tzX2N1cnJlbnRfcGFnZTogbnVtYmVyXG59KSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKCcvY3JlYXRlVGFzaycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBhcHBDc3JmdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybURhdGEsIGN1cnJlbnRfcGFnZTogdGFza3NfY3VycmVudF9wYWdlIH0pLFxuICAgIH0pXG59XG4iLCJleHBvcnQgY29uc3QgZmV0Y2hTZWxlY3RlZFRhc2tzID0gYXN5bmMgKHtcbiAgICBwYWdlLFxuICAgIGZpbHRlcl9ieV90ZXh0LFxuICAgIGZpbHRlcl9zdGF0ZSxcbiAgICB1c2VyX2lkLFxufToge1xuICAgIHBhZ2U6IG51bWJlclxuICAgIGZpbHRlcl9ieV90ZXh0OiBzdHJpbmdcbiAgICBmaWx0ZXJfc3RhdGU6IHN0cmluZ1xuICAgIHVzZXJfaWQ6IG51bWJlclxufSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBmZXRjaCgnL2ZldGNoU2VsZWN0ZWRUYXNrcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGFnZSwgZmlsdGVyX2J5X3RleHQsIGZpbHRlcl9zdGF0ZSwgdXNlcl9pZCB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGFwcENzcmZ0b2tlbixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFza3M6IEpTT04ucGFyc2UoZGF0YS50YXNrcyksXG4gICAgICAgICAgICAgICAgbnVtX3BhZ2VzOiArZGF0YS5udW1fcGFnZXMsXG4gICAgICAgICAgICAgICAgY3VycmVudF9wYWdlOiArZGF0YS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAvZmV0Y2hTZWxlY3RlZFRhc2tzOicsIGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCBmZXRjaFRhc2tCeUlkID0gYXN5bmMgKHsgdGFza19pZCB9OiB7IHRhc2tfaWQ6IG51bWJlciB9KSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKCcvZmV0Y2hUYXNrJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0YXNrX2lkIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogYXBwQ3NyZnRva2VuLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YS50YXNrKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgL3Rhc2svOicsIGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCBmZXRjaFVzZXJzQW5kVGFza3MgPSBhc3luYyAoeyB1c2VyX2lkLCBwYWdlLCBmaWx0ZXJfYnlfdGV4dCwgZmlsdGVyX3N0YXRlIH06IHsgdXNlcl9pZDogbnVtYmVyLCBwYWdlOiBudW1iZXIsIGZpbHRlcl9ieV90ZXh0OiBzdHJpbmcsIGZpbHRlcl9zdGF0ZTogc3RyaW5nIH0pID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goJy9mZXRjaFVzZXJzQW5kVGFza3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJfaWQsIHBhZ2UsIGZpbHRlcl9ieV90ZXh0LCBmaWx0ZXJfc3RhdGUgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBhcHBDc3JmdG9rZW4sXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXJzOiBKU09OLnBhcnNlKGRhdGEudXNlcnMpLFxuICAgICAgICAgICAgICAgIHRhc2tzOiBKU09OLnBhcnNlKGRhdGEudGFza3MpLFxuICAgICAgICAgICAgICAgIG51bV9wYWdlczogK2RhdGEubnVtX3BhZ2VzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogK2RhdGEuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgL2ZldGNoVXNlcnNBbmRUYXNrczonLCBlcnJvcilcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0pXG59XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSAnLi9kZWxldGVUYXNrJ1xuaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tICcuL2VkaXRUYXNrJ1xuaW1wb3J0IHsgZmV0Y2hTZWxlY3RlZFRhc2tzIH0gZnJvbSAnLi9mZXRjaFNlbGVjdGVkVGFza3MnXG5pbXBvcnQgeyBmZXRjaFRhc2tCeUlkIH0gZnJvbSAnLi9mZXRjaFRhc2tCeUlkJ1xuaW1wb3J0IHsgZmV0Y2hVc2Vyc0FuZFRhc2tzIH0gZnJvbSAnLi9mZXRjaFVzZXJzQW5kVGFza3MnXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vc2VuZE1lc3NhZ2UnXG5pbXBvcnQgeyB0b2dnbGVDb21wbGV0ZVRhc2sgfSBmcm9tICcuL3RvZ2dsZUNvbXBsZXRlVGFzaydcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcbiAgICBmZXRjaFVzZXJzQW5kVGFza3MsXG4gICAgZmV0Y2hTZWxlY3RlZFRhc2tzLFxuICAgIGVkaXRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdG9nZ2xlQ29tcGxldGVUYXNrLFxuICAgIHNlbmRNZXNzYWdlLFxuICAgIGZldGNoVGFza0J5SWQsXG59XG4iLCJleHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoeyBuZXdfbWVzc2FnZSwgdGFza19pZCB9OiB7IG5ld19tZXNzYWdlOiBzdHJpbmc7IHRhc2tfaWQ6IG51bWJlciB9KSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKCcvc2VuZE1lc3NhZ2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogYXBwQ3NyZnRva2VuLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5ld19tZXNzYWdlLCB0YXNrX2lkIH0pLFxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5tZXNzYWdlXG4gICAgICAgIH0pXG59XG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlQ29tcGxldGVUYXNrID0gYXN5bmMgKHsgdGFza0lkIH06IHsgdGFza0lkOiBudW1iZXIgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCgnL3RvZ2dsZUNvbXBsZXRlVGFzaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0YXNrSWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBhcHBDc3JmdG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHR5cGUgQ2xhc3NWYWx1ZSwgY2xzeCB9IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xuICAgIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==