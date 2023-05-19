import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { useLocation,useNavigate } from 'react-router-dom';
import { API } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { User } from '../models';


export function User2Class() {

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const defaultUserProfileURL = "https://mnotes-image-bucket205513-dev.s3.eu-west-1.amazonaws.com/public/default_userImage.jpg?AWSAccessKeyId=ASIAXOWTDDJXOATPNFW7&Expires=1684417710&Signature=739ZXE7mqNNippA8QNDwPdIaWx4%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDYaCWV1LXdlc3QtMSJHMEUCIEfuTGUfWcyNgW6QyzNORxx4Ev3kc7F%2BFa0erb1Egs8qAiEAuRW2%2FfYq1W53HtQH%2BwtR4T3Kl8gZsvSC9r%2BQVQaKJSoqxAQIXxAAGgw1MTI2MTc1NTI0OTQiDONnnbHK96W09faIRCqhBIpMutwM%2FddOmk0Jpa%2BbHIxV%2BPaWSCmvdWKOla5nSelzlYfE00yynzwgNPKbJYZuaVe2c7pepkTJSU%2FMN2UzVT9oeXUTy9hy%2FzbnwnoFOK%2FRDFbCSl5umSLyRzfWWo8gseIMFSogNFXIxiZl5JV1eIzAE3ykyALAbVrkXNALis6pnrEVy4N%2B%2BT2mXQ7urnvGBoInEfadfvNoqootMb1LLFXBwo1eJ7Y3FVMaAZdzcVeSP8E1GUyWZnDpU93uwlzy8nFo%2FpG6vGQe8KJ0dQ%2FaWO%2Fq5kS4sWk054yI8pbx2fnTWAmVo%2BQqHjux3l0nbCZ6%2BghilPcZ6aVGgNBKfy7Mi8G4gs8ZJzsAFLR9LCzI2YvXAXM%2FSI7OxUo3q2m8iJ3H9cezp0mVMIgh%2BXDeC4O4FMDe9rTad%2BoonK%2BRk2ZQVKQwvHzOu0WGD2zQcr7vxftMk6YJvkjsfnSDhFIOhRDBZDFkD4UJIr025m94jj64dwLvQqQcUoVAB7jpskxLh62LWJfVIke9QYQ5NcscVGAaB8cQte6WR7vY3R3syI04cJItcDEfwraZoigxYZF%2BlPIvcvfsvwzn%2FhLPnh1ubbTrFCxMGXRpCOVW8%2F0LJse77hdkb2ZCjZ7a39SlPgcNIodkMqJkA2uk3y3WCdwSknXTnEjgXl32yOfsIMGBUnoVwRRb7BUpoQrzzsjcPMFaDfJ6PVhgmhZed0tAJZEkel529NhJMPHWmKMGOoUCMt2Se1SawCikMbztgJhv%2Bh3LflLznAHA5el93KJ5ZmMNkKVxPg3eIipWce7hehpfs7RKBk4NUkJ9IQOqoHzs%2FgXlnO694vuEYdILEjQA3KprbUy38J0X%2BcHutjp8jvaO7iBMZ2bvfKv%2FDFrr%2BSFQ3ST4yscYHg4sbIHtu%2F2OZQ2CotLScEo9%2B6KDwLVvo%2BeInFyeThBtlIrco4kgytzcTYOwcFtnU7lFINSovsH%2BXzg5ECxQ86qy%2FMm%2Fq8uVcQsqEXdmdNDrB0wkCN7BFGZab4zucZ6Vh6KBOFzv8ZCN%2BJsqH%2FnvkCrUNTKI9Xq7xySNwU8iS%2BwKhC5fzmjcxcuXOSMyTnYH"

    return {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
        defaultUserProfileURL
    }
}