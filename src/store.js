import { reactive, shallowRef } from 'vue';

// A simple global state for the modal
export const modalState = reactive({
  isOpen: false,
  content: null, // Component to render inside the modal
  props: {}, // Props for the component
  title: '', // Title for the modal
});

export function openModal(title, component, props = {}) {
  modalState.title = title;
  modalState.content = shallowRef(component);
  modalState.props = props;
  modalState.isOpen = true;
}

export function closeModal() {
  modalState.isOpen = false;
  modalState.content = null;
  modalState.props = {};
  modalState.title = '';
}
