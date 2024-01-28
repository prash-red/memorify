from typing import Optional


def response_model(status: int, message: str, details: Optional = None):
    return {
        'status': status,
        'message': message,
        'details': details
    }
