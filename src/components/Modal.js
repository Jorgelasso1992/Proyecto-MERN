import { Button } from "./Button"

export function Modal({children}){
    return(
        <article className="modal is-open">
            <div className="modal-container">
                <Button value="X" type="button"/>
                {children}
            </div>
        </article>
    )
}