import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { 
  fetchActivists,
 } from '../../store/actions/activistsActions';
import Header from '../../components/Layout/Header';

const Activists = ({activists, fetchActivists}) => {

const [activistsList, setActivistsList] = useState([]);

useEffect(() => {
  async function loadData() {
    await fetchActivists();
    if (activists) setActivistsList(activists);
  };
  loadData();
}, [activists])

  return (
    <div className='activists-div'>
      <Header headerBgColor='#fff' textColor='#6A0000' />
    </div>
  );
};

const mapStateToProps = state => ({
  activists: state.activist.activists,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivists: () => dispatch(fetchActivists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activists);
