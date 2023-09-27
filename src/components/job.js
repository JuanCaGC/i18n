import React from "react";
import {FormattedDate, FormattedMessage} from 'react-intl';

const Job = (props) => {

  const formattedSalary = (salary) => {
    if (salary >= 1000000) {
      const million = <FormattedMessage id="million" defaultMessage="million" />;
      const millions = <FormattedMessage id="millions" defaultMessage="millions" />;
      return (
        <>
          {(salary / 1000000)} {salary > 1000000 ? millions : million}
        </>);
    }
    return(`${salary}`);
  };
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formattedSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{props.offer.visits.toLocaleString()}</td>
    </tr>
  );
};

export default Job;
