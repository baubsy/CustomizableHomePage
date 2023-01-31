import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Form } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { IWidget } from 'app/shared/model/widget.model';
import { createEntity } from 'app/entities/widget/widget.reducer';

export interface IAddModalProps {
  showModal: boolean;
  handleClose: () => void;
  widgets: readonly IWidget[];
}
export const AddModal = (props: IAddModalProps) => {
  const dispatch = useAppDispatch();
  const addWidget = () => {
    dispatch(createEntity({ type: 'SearchBar', props: '{"action":"http://www.google.com/search?"}' }));
  };
  return (
    <div>
      <Modal isOpen={props.showModal}>
        <ModalHeader>Add Widget</ModalHeader>
        <ModalBody>
          Add Widgets Test
          <button className="btn btn-primary" onClick={addWidget}>
            add widget test
          </button>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={props.handleClose}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddModal;
