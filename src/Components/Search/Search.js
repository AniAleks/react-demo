import React, { useState } from 'react';
import { Button, InputGroup, FormControl, SplitButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './Search.module.css';
import PropTypes from 'prop-types';


function Search (props){

    const defaultState = {
      search: '',
      sortId: '',
      sortTitle: '',
      filterId: '',
      filterTitle: '',
      date: ''
    };
  const [searchState,changeState]= useState(defaultState)

  const sort = [
    {
      id: 'none',
      title: 'None'
    },
    {
      id: 'a-z',
      title: 'a-z'
    },
    {
      id: 'z-a',
      title: 'z-a'
    },
    {
      id: 'creation_date_oldest',
      title: 'Creation date oldest'
    },
    {
      id: 'creation_date_newest',
      title: 'Creation date newest'
    },
    {
      id: 'completion_date_oldest',
      title: 'Compl. date oldest'
    },
    {
      id: 'completion_date_newest',
      title: 'Compl. date newest'
    }];

  const filter = [
    {
      id: 'none',
      title: 'None'
    },
    {
      id: 'create_lt',
      title: 'Created before'
    },
    {
      id: 'create_gt',
      title: 'Created after'
    },
    {
      id: 'complete_lt',
      title: 'Complete before'
    },
    {
      id: 'complete_gt',
      title: 'Complete after'
    }];


  const inputChangeHandler = (event) => {
    changeState({ ...defaultState,search: event.target.value });
  }

  const submitHandler = (type) => (event)=>{
    if (type === 'reset') {
      props.onSubmit({});
      changeState(defaultState);
    }
 
    if((!type && event.key === 'Enter') || type === 'submit'){
      const { sortId, search, filterId, date } = searchState;
      const data = {
        search: search,
        sort: sortId
      };
      if (filterId && date) {
        data[filterId] = date;
      }
     props.onSubmit(data);
     changeState(defaultState);
    }
  }

  const selectHandler = (type, id, title) => () => {
    if (id === 'none') {
      changeState({ ...defaultState,[type + 'Id']: '', [type + 'Title']: '' });
    }
    else {
      changeState({ ...defaultState,[type + 'Id']: id, [type + 'Title']: title });
    }
  }

  const dateChangeHandler = (event) => {
    changeState({  ...defaultState,date: event.target.value });
  }
    const { sortId, search, sortTitle, filterTitle, filterId, date } = searchState;
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by required criteria"
            aria-describedby="basic-addon2"
            value={search}
            onChange={inputChangeHandler}
            onKeyDown={submitHandler()}
            className={classes.searchInput}
          />
          <InputGroup.Append>
            <Button
              variant="info"
              onClick={submitHandler('submit')}
            >
              <FontAwesomeIcon icon={faSearch} className={classes.icons} />
            </Button>
          </InputGroup.Append>
        </InputGroup>



        <SplitButton
          variant='info'
          className={classes.Buttons}
          title={sortTitle || 'Sort'}
        >
          {sort.map(({ id, title }) =>
            <Dropdown.Item 
              key={id}
              onClick={this.selectHandler('sort', id, title)}
              className={`${sortId === id ? classes.active : ''} ${classes.sortItem}`}
            >
              {title}
            </Dropdown.Item>)
          }
        </SplitButton>


        <SplitButton
          variant='info'
          title={filterTitle || 'Filter'}
          className={classes.Buttons}
        >
          {filter.map(({ id, title }) =>
            <Dropdown.Item
              key={id}
              onClick={selectHandler('filter', id, title)}
              className={`${filterId === id ? classes.active : ''} ${classes.sortItem}`}
            >
              {title}
            </Dropdown.Item>)
          }
        </SplitButton>
        <input type="date" value={date} onChange={dateChangeHandler} className={classes.dateInput} />

        <Button
          variant="outline-info"
          onClick={submitHandler('reset')}
          className={classes.Reset}
        >
          Reset
</Button>

      </>
    );
 }



Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Search;