import React, { PureComponent } from 'react';
import classes from './style.module.css';


class About extends PureComponent {

    render() {
     

        return (

            <>
                <p className={classes.heading}>About Us page</p>
                <p className={classes.text}>
                    Welcome to TaskBOOK, your number one source for all things organisation.
                    We're dedicated to giving you the very best of Tasks organizer,
                    with a focus on details of the tasks, theirs creation and  overdue dates.
                    Founded in 2020 by Ani Aleksanyan, TaskBOOK has come a long way from its beginnings in a Yerevan. When Ani first started out, her passion for creating
                    the most suitable organizer, her passion drove her to  quit her job,all the daily chores, and gave her the impetus to turn hard work and inspiration into
                     to a booming online tasks facilitator.
                    We now serve customers all over the world, and are thrilled to be a part of our lovely customers' daily life.

                    We hope you enjoy our product as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate
                    to contact us via Contact section.
                    <br/> <br/>
                    <span className={classes.name} >
                        Sincerely,
                        Ani
                    </span>

                    </p>
          
               
            </>
        );
    }
}

export default About;