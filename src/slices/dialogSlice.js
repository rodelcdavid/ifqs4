import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    dialogs: {
      messageModal: {
        isOpen: false,
        messageHeader: "",
        messageBody: "",
        actionName: "",
        messageIcon: null,
        handleConfirm: null,
      },
      messageConfirmDialog: {
        isOpen: false,
        messageHeader: "",
        messageBody: "",
        actionName: "",
        messageIcon: null,
        handleConfirm: null,
        isLoading: null,
      },
      searchFacilityDialog: {
        isOpen: false,
        table: null,
        setSelected: null,
        defaultSearchKey: null,
        columnsToHide: null,
      },
      registerDialog: {
        isOpen: false,
        handleConfirm: null,
      },
    },
  },
  reducers: {
    openSearchFacilityDialog: (state, { payload }) => {
      const { table, setSelected, defaultSearchKey, columnsToHide } = payload;
      state.dialogs.searchFacilityDialog.isOpen = true;
      state.dialogs.searchFacilityDialog.table = table;
      state.dialogs.searchFacilityDialog.setSelected = setSelected;
      //   state.dialogs.searchFacilityDialog.defaultSearchKey = defaultSearchKey;
      state.dialogs.searchFacilityDialog.columnsToHide = columnsToHide;
    },
    closeSearchFacilityDialog: (state, { payload }) => {
      state.dialogs.searchFacilityDialog.isOpen = false;
      state.dialogs.searchFacilityDialog.table = null;
      state.dialogs.searchFacilityDialog.setSelected = null;
      //   state.dialogs.searchFacilityDialog.defaultSearchKey = null;
      state.dialogs.searchFacilityDialog.columnsToHide = null;
    },

    openMessageModal: (state, { payload }) => {
      const {
        dialogType,
        messageHeader,
        messageBody,
        messageIcon,
        actionName,
        handleConfirmExtra,
      } = payload;

      state.dialogs[dialogType].isOpen = true;
      state.dialogs[dialogType].messageHeader = messageHeader;
      state.dialogs[dialogType].messageBody = messageBody;
      state.dialogs[dialogType].messageIcon = messageIcon;
      state.dialogs[dialogType].handleConfirmExtra = handleConfirmExtra
        ? handleConfirmExtra
        : null;
    },
    closeMessageModal: (state, { payload }) => {
      const { dialogType } = payload;
      state.dialogs[dialogType].isOpen = false;
      state.dialogs[dialogType].messageHeader = "";
      state.dialogs[dialogType].messageBody = "";
      state.dialogs[dialogType].messageIcon = null;
      state.dialogs[dialogType].handleConfirmExtra = null;
    },

    openMessageConfirmDialog: (state, { payload }) => {
      const {
        messageHeader,
        messageBody,
        // messageAction,
        action,
        actionColor,
        handleConfirm,
        isLoading,
      } = payload;

      state.dialogs.messageConfirmDialog.isOpen = true;
      state.dialogs.messageConfirmDialog.messageHeader = messageHeader;
      state.dialogs.messageConfirmDialog.messageBody = messageBody;
      state.dialogs.messageConfirmDialog.action = action ? action : null;
      state.dialogs.messageConfirmDialog.actionColor = actionColor
        ? actionColor
        : null;
      state.dialogs.messageConfirmDialog.handleConfirm = handleConfirm;
      state.dialogs.messageConfirmDialog.isLoading = isLoading;
    },
    closeMessageConfirmDialog: (state, { payload }) => {
      state.dialogs.messageConfirmDialog.isOpen = false;
      state.dialogs.messageConfirmDialog.messageHeader = "";
      state.dialogs.messageConfirmDialog.messageBody = "";
      state.dialogs.messageConfirmDialog.action = null;
      state.dialogs.messageConfirmDialog.actionColor = null;
      state.dialogs.messageConfirmDialog.handleConfirm = null;
      state.dialogs.messageConfirmDialog.isLoading = null;
    },
    openRegisterDialog: (state, { payload }) => {
      const { handleConfirm } = payload;
      state.dialogs.registerDialog.isOpen = true;
      state.dialogs.registerDialog.handleConfirm = handleConfirm;
    },
    closeRegisterDialog: (state, { payload }) => {
      state.dialogs.registerDialog.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openMessageModal,
  closeMessageModal,
  openMessageConfirmDialog,
  closeMessageConfirmDialog,
  openSearchFacilityDialog,
  closeSearchFacilityDialog,
  openRegisterDialog,
  closeRegisterDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;
